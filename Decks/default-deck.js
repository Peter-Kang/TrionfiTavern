const cardSrcDefault = [
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar00.jpg", // The Fool
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar01.jpg", // The Magician
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar02.jpg", // The High Priestess
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar03.jpg", // The Empress
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar04.jpg", // The Emperor
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar05.jpg", // The Hierophant
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar06.jpg", // The Lovers
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar07.jpg", // The Chariot
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar08.jpg", // Strength 
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar09.jpg", // The Hermit
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar10.jpg", // The Wheel of Fortune
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar11.jpg", // Justice
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar12.jpg", // The Hanged Man
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar13.jpg", // Death
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar14.jpg", // Temperance
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar15.jpg", // The Devil
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar16.jpg", // The Tower
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar17.jpg", // The Star
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar18.jpg", // The Moon
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar19.jpg", // The Sun
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar20.jpg", // Judgement
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/ar21.jpg", // The world
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cu02.jpg", // 2 Cups
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cu03.jpg", // 3
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cu04.jpg", // 4 
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cu05.jpg", // 5
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cu06.jpg", // 6
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cu07.jpg", // 7
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cu08.jpg", // 8 
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cu09.jpg", // 9
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cu10.jpg", // 10
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cuac.jpg", // Ace
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cuki.jpg", // King
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cukn.jpg", // Knight
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cupa.jpg", // Page
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/cuqu.jpg", // Queen
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/pe02.jpg", // 2 Pentacles
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/pe03.jpg", // 3
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/pe04.jpg", // 4 
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/pe05.jpg", // 5
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/pe06.jpg", // 6
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/pe07.jpg", // 7
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/pe08.jpg", // 8 
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/pe09.jpg", // 9
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/pe10.jpg", // 10
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/peac.jpg", // Ace
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/peki.jpg", // King
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/pekn.jpg", // Knight
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/pepa.jpg", // Page
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/pequ.jpg", // Queen
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/sw02.jpg", // 2 Swords
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/sw03.jpg", // 3
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/sw04.jpg", // 4 
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/sw05.jpg", // 5
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/sw06.jpg", // 6
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/sw07.jpg", // 7
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/sw08.jpg", // 8 
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/sw09.jpg", // 9
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/sw10.jpg", // 10
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/swac.jpg", // Ace
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/swki.jpg", // King
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/swkn.jpg", // Knight
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/swpa.jpg", // Page
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/swqu.jpg", // Queen
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/wa02.jpg", // 2 wands
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/wa03.jpg", // 3
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/wa04.jpg", // 4 
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/wa05.jpg", // 5
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/wa06.jpg", // 6
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/wa07.jpg", // 7
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/wa08.jpg", // 8 
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/wa09.jpg", // 9
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/wa10.jpg", // 10
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/waac.jpg", // Ace
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/waki.jpg", // King
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/wakn.jpg", // Knight
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/wapa.jpg", // Page
  "https://cdn.jsdelivr.net/gh/peter-kang/CDN/Tarot/Images/Default/waqu.jpg", // Queen
];

const DeckList = [cardSrcDefault];
