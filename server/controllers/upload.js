const logger = require('../logger');

function uploadHandler(req, res) {
  if (!req.file) return res.status(400).json({ error: 'no_file' });
  const relativeUrl = '/uploads/' + req.file.filename;
  logger.info('upload.saved', { filename: req.file.filename, size: req.file.size, url: relativeUrl });
  res.json({
    ok: true,
    url: relativeUrl,
    name: req.file.originalname,
    filename: req.file.filename,
    size: req.file.size
  });
}

module.exports = { uploadHandler };
