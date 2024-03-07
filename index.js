import quotes from 'popular-quotes';

function getWisdomWhisper(input) {
  const availableType = [
    'Movies',
    'Tv',
    'Speeches',
    'Books',
    'Anime',
    'Lyrics',
    'Sports'
  ];

  if(availableType.includes(input)){
    return quotes[input].getRandom();
  }

  return "Type Unavailable! Option: [Movies, Tv, Speeches, Books, Anime, Lyrics, Sports]";

}

export default getWisdomWhisper;