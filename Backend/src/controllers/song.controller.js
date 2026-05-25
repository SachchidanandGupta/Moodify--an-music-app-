const songModel = require("../models/song.model");
const storageService = require("../services/storage.service");

const id3 = require("node-id3");

async function uploadController(req, res) {
  const songBuffer = req.file.buffer;
  const { mood } = req.body;
  const tags = id3.read(songBuffer);
  const [songFile,posterFile] = await Promise.all([
      storageService.uploadFile({
    buffer: songBuffer,
    filename: tags.title + ".mp3",
    folder: "/cohort-2/moodify/songs",
  }),

  storageService.uploadFile({
    buffer: tags.image.imageBuffer,
    filename: tags.title + ".jpeg",
    folder: "/cohort-2/moodify/poster",
  })

  ])

  const song = await songModel.create({
    songUrl: songFile.url,
    posterUrl: posterFile.url,
    title: tags.title,
    mood: mood,
  });

  res.status(201).json({
    message: "Song created successfully",
    song,
  });
}

async function getSongs(req,res){
//    const mood  = req.params.mood;
   const {mood} = req.query;
   const songs = await songModel.findOne({mood});
   
   res.status(200).json({
    message:"music fetched successfully",
    songs
   })
}

module.exports = {
  uploadController,
  getSongs
};
