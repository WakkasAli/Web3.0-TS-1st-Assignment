function make_album(artist, title) {
    return obj = {
      artist: artist,
      title: title,
    };
  }
  
  const album = make_album("Haider Ali", "xyz");
  console.log(`Album == `, album);