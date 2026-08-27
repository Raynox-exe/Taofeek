const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const DIRS = {
  css: path.join(BASE, 'assets', 'css'),
  fonts: path.join(BASE, 'assets', 'fonts'),
  images: path.join(BASE, 'assets', 'images'),
};
Object.values(DIRS).forEach(d => fs.mkdirSync(d, { recursive: true }));

function download(fileUrl, destPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
      console.log(`  [SKIP] ${path.basename(destPath)}`);
      return resolve(destPath);
    }
    const proto = fileUrl.startsWith('https') ? https : http;
    const req = proto.get(fileUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${fileUrl.slice(0,60)}`));
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(destPath); });
      file.on('error', (e) => { fs.unlink(destPath, () => {}); reject(e); });
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

function downloadText(fileUrl) {
  return new Promise((resolve, reject) => {
    const proto = fileUrl.startsWith('https') ? https : http;
    let data = '';
    const req = proto.get(fileUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadText(res.headers.location).then(resolve).catch(reject);
      }
      res.setEncoding('utf8');
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function main() {
  console.log('\n=== T-Shop Asset Downloader ===\n');

  // 1. Tailwind
  console.log('Downloading Tailwind CSS...');
  try {
    await download('https://cdn.tailwindcss.com', path.join(DIRS.css, 'tailwind.js'));
    console.log('  OK tailwind.js');
  } catch(e) { console.log('  FAIL Tailwind:', e.message); }

  // 2. Inter font
  console.log('\nDownloading Inter font...');
  try {
    const css = await downloadText('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    const urls = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/g)].map(m => m[1]);
    console.log(`  Found ${urls.length} woff2 files`);
    let localCss = css;
    for (const u of urls) {
      const fname = 'inter-' + u.split('/').pop();
      const dest = path.join(DIRS.fonts, fname);
      try { await download(u, dest); localCss = localCss.replace(u, `../fonts/${fname}`); console.log(`  OK ${fname}`); }
      catch(e) { console.log(`  FAIL ${fname}:`, e.message); }
    }
    fs.writeFileSync(path.join(DIRS.css, 'inter.css'), localCss, 'utf8');
    console.log('  OK inter.css');
  } catch(e) { console.log('  FAIL Inter:', e.message); }

  // 3. Material Symbols
  console.log('\nDownloading Material Symbols Outlined...');
  try {
    const css = await downloadText('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
    const urls = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/g)].map(m => m[1]);
    console.log(`  Found ${urls.length} woff2 files`);
    let localCss = css;
    for (const u of urls) {
      const fname = 'matsym-' + u.split('/').pop();
      const dest = path.join(DIRS.fonts, fname);
      try { await download(u, dest); localCss = localCss.replace(u, `../fonts/${fname}`); console.log(`  OK ${fname}`); }
      catch(e) { console.log(`  FAIL ${fname}:`, e.message); }
    }
    fs.writeFileSync(path.join(DIRS.css, 'material-symbols.css'), localCss, 'utf8');
    console.log('  OK material-symbols.css');
  } catch(e) { console.log('  FAIL Material Symbols:', e.message); }

  // 4. Images
  console.log('\nDownloading images...');
  const images = [
    ['https://lh3.googleusercontent.com/aida-public/AB6AXuCPjUapr2YfRoG8coObGef_RWXsD-ObBz9M_5HVckSwTzVca2PK4AwmIm1AO0L5S0OUhwL1vMdEy5myEyCUQCULOCb6znAo1JtDT-QXqnSI9laNrXyq_5vly-KBkMEjwTxqyOApC5-qQlONvwdgYtHooyQCpx83SihjyGmcDZT4_4ocyaLMLSG0HpCVIF4lzfMT-mH13nNfUj0mTZtZIDXqhEKg2oG9S0PPKOgygEDf82aNV4CRs9YO8w', 'hero-home.jpg'],
    ['https://lh3.googleusercontent.com/aida-public/AB6AXuAngsTzy8ksnO7vF7p9o6H4b2-b6XgtGM9vqxXGXpfFVbPwmsMbwtk25NJfEZyAfMojGWfbGvIFC1QnVfLGh1xm82dZwfZ42qdFnLZSLVPId5OOh0s3lvU2atfhOBNNrz25rJ08gqsyryw_3AW5ZYQqe5TkCiR8rX8_Hqpjf5QaFs-tD8PjHugh1LkVEMrV5ANxzsjCRxKd8gI0FUSycfIm9LNG9HGZcKUiYYTbjnrhn7gGT3-ROg9Wng', 'hero-categories.jpg'],
    ['https://lh3.googleusercontent.com/aida-public/AB6AXuB2jyt12ATPyz1zutKcbDU08fXkBJIaVqGcWWxKetpfD-yys2oIHv3jCM3hieGS_kSHgugcz9PR53o7Ur6DLd9KvuLmuYRPxjl9FRu67Af-NjP8DAphTh2bP3Tj2rZAWomUhovGdCX2rtf3HYyWu8Z4UaJm3V8bgXdkxI_DX734_DGvTcEIYwwcywwgbUFGrtFoKBAsvLQ6r8q2kYB-kYkx3UrCRzASIGKnYE7dcKMV06cD2uEKWQd4xg', 'hero-deals.jpg'],
    ['https://lh3.googleusercontent.com/aida-public/AB6AXuBS39uMHoNxYYu1C8Bwpvsue40KQ9WhZmQhlcH7_pitEhhYLzqo0CBh4XRt0-olA0WiD3PVnclJ0kV-1OIdfSsd_1IoC7aLWzl_i5CNTjnhcYD4aMABHoee17O_Y6fVKMMgYV9puVmgLBIJO9-SC0xX9utD_SdhNNoRyWXC_Q_OIvH3Bi5o2Ifd1x3iOat11SNJ-YSZeZMdnTdEUd88f89SxlPaYVjTVDcz1cnsDW42RO0JehsU7GVNsA', 'cat-electronics.jpg'],
    ['https://lh3.googleusercontent.com/aida-public/AB6AXuBL7qiUqE0hj8rUBBiAi9a_ZxB6_Bf8QCvWZLLuEnrDxP7DDzx5YoTNckG8QF5WfvLE1MiCPbYbLW_6x5XIvbXbeaa8UBirbxnve4GUgT5C_QdX9UGSE61FIHvhlWWzyIMB7iNpaCtM3YKer-aWGxFEuGI8rOv3f7wr-fHO9zP1aRXl6CXiIHseYKF4A_YBhtqlSfbsVzz6hephy_IP0qmnSgpndQaZKeRdvLG4QAxuEhipR8_xrY1TXA', 'cat-fashion.jpg'],
    ['https://lh3.googleusercontent.com/aida-public/AB6AXuAFdmX3gB8If3E0KUhZfzAb2wrgAXX_mM-WaGqe3NlUR3YbGYz1LfsHQnF0V2OOEDS6n0v4t4P0K6bJHIAxd8_f6I66ZLohZeAgxyx9IZfn-PsC-jZztV7bmbMwz9AdpVhR90uYZ3sjfcKkkFLI_zOQp-MJcfatats6rRL4MLQ6JP55F01pm_dMjTXC0j6nSTngXSGwkYvoChf-3lUeL2dovOoA88pfsiyabVnWaImQCNf63yCjbmzCTA', 'cat-homedecor.jpg'],
    ['https://lh3.googleusercontent.com/aida-public/AB6AXuCPqw9f67LJQS3bwwVFMSOghtVE4ZNMO1xQ0J67_tgDFa34f5JHrdV-2JA8zCrcMoqq1dtonqROtPvVLAyoTI_mAgyakVaMOdku6HoXEun9ODz3Y5ZvN6vONBGf-gjPn297lfkiR2wle2UYkHVyZvKgqr28IxQxDsxpCEnDwVLX6L3amQyEcWh86as_wjgNFH-xF4eysMfPzkoGwyDkcg2eYj4uu4oAl0SlcNZN9S1dnJ8U27o06a4zRw', 'cat-handmade.jpg'],
    ['https://lh3.googleusercontent.com/aida-public/AB6AXuD1mHb8CYeNjbavuM5y-s7x3dUBwdlbmL1CaoMNol6oi6p9e4ngLLjIeCwRAmKeqSKBdgBG_plVuUcV9MMJyxuz4985C1tmvKxg2yTN6QoE9pV7Y3T0ETIiiX54XZZr7E5oFEbzGs7y0KDcTFC8UI9FMsf-PVqJmnU2VT-bjkjyvDy6Ta751kqEnsUlDPq2GaDypiJaGzMAPReXf-oUfB6wYmFgCf_wsNwMhmfQpX2o20iTd2jdSrI1gQ', 'cat-beauty.jpg'],
    ['https://lh3.googleusercontent.com/aida-public/AB6AXuDJxyJHexEh4Oa_hFl7qMhjckN9Qk6V_4rVp518CeCZ4k1-joKrSJFZ7EBoHfziC3EUx_4WZhBfp03BPaLM4j6LO5eXA-c4YLczmO9vfAECT7sZTroWmVHLvPKPxlJ9WUMkVJyC-YBgxs-GcL-CAztl4jOXtOwU9DvmzVBbKbn0JTzvc4k31l2CuisKtAPoXkaCSia-OTNXSbG-eMFP1zBnbj8bScLKiZ4JyDYmnBk6hIoSfEuilPE-jw', 'cat-art.jpg'],
    ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80', 'vendor-banner-default.jpg'],
    ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80', 'product-watch-sm.jpg'],
    ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80', 'product-watch-md.jpg'],
    ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80', 'avatar-vendor-1.jpg'],
    ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80', 'avatar-vendor-2.jpg'],
  ];

  for (const [imgUrl, name] of images) {
    try {
      await download(imgUrl, path.join(DIRS.images, name));
      console.log(`  OK ${name}`);
    } catch(e) { console.log(`  FAIL ${name}: ${e.message}`); }
  }

  console.log('\n=== DONE ===\n');
}

main().catch(console.error);
