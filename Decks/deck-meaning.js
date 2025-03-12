const cardSrcMeaning = [ // ["Name","Normal","Reverse"]
    ["The Fool","beginnings, freedom, innocence, originality, adventure, idealism, spontaneity","reckless, careless, distracted, naive, foolish, gullible, stale, dull"],
    ["The Magician","willpower, desire, being resourceful,, skill, ability, concentration, manifestation","manipulation, cunning, trickery, wasted talent, illusion, deception"],
    ["The High Priestess","unconscious, intuition, mystery, spirituality, higher power, inner voice","repressed intuition, hidden motives, superficiality, confusion, cognitive dissonance"],
    ["The Empress","divine feminine, sensuality, fertility, nurturing, creativity, beauty, abundance, nature","insecurity, overbearing, negligence, smothering, lack of growth, lack of progress"],
    ["The Emperor","stability, structure, protection, authority, control, practicality, focus, discipline","tyrant, domineering, rigid, stubborn, lack of discipline, recklessness"],
    ["The Hierophant","tradition, social groups, conventionality, conformity, education, knowledge, beliefs","rebellion, unconventionality, non-conformity, new methods, ignorance"],
    ["The Lovers","love, unions, partnerships, relationships, choices, romance, balance, unity","disharmony, imbalance, conflict, detachment, bad choices, indecision"],
    ["The Chariot","success, ambition, determination, willpower, control, self-discipline, focus","forceful, no direction, no control, powerless, aggression, obstacles"],
    ["Strength","courage, bravery, confidence, compassion, self-confidence, inner power","self-doubt, weakness, low confidence, inadequacy, cowardice, forcefulness"],
    ["The Hermit","self-reflection, introspection, contemplation, withdrawal, solitude, search for self","loneliness, isolation, recluse, being anti-social, rejection, returning to society"],
    ["The Wheel of Fortune","change, cycles, fate, decisive moments, luck, fortune, unexpected events","bad luck, lack of control, clinging to control, unwelcome changes, delays"],
    ["Justice","justice, karma, consequence, accountability, law, truth, honesty, integrity, cause and effect","injustice, retribution, dishonesty, corruption, dishonesty, unfairness, avoiding accountability"],
    ["The Hanged Man","sacrifice, waiting, uncertainty, lack of direction, perspective, contemplation","stalling, disinterest, stagnation, avoiding sacrifice, standstill, apathy"],
    ["Death","transformation, endings, change, transition, letting go, release","fear of change, repeating negative patterns, resisting change, stagnancy, decay"],
    ["Temperance","balance, peace, patience, moderation, calm, tranquillity, harmony, serenity","imbalance, excess, extremes, discord, recklessness, hastiness"],
    ["The Devil","oppression, addiction, obsession, dependency, excess, powerlessness, limitations","independence, freedom, revelation, release, reclaiming power, reclaiming control"],
    ["The Tower","disaster, destruction, upheaval, trauma, sudden change, chaos","averting disaster, delaying the inevitable, resisting change"],
    ["The Star","hope, inspiration, positivity, faith, renewal, healing, rejuvenation","hopelessness, despair, negativity, lack of faith, despondent"],
    ["The Moon","illusion, intuition, uncertainty, confusion, complexity, secrets, unconscious","fear, deception, anxiety, misunderstanding, misinterpretation, clarity, understanding"],
    ["The Sun","happiness, success, optimism, vitality, joy, confidence, happiness, truth","blocked happiness, excessive enthusiasm, pessimism, unrealistic expectations, conceitedness"],
    ["Judgement","self-evaluation, awakening, renewal, purpose, reflection, reckoning","self-doubt, lack of self-awareness, failure to learn lessons, self-loathing"],
    ["The World","completion, achievement, fulfillment, sense of belonging, wholeness, harmony","lack of closure, lack of achievement, feeling incomplete, emptiness"],
    ["2 of Cups","unity, partnership, attraction, connection, close bonds, joining forces, mutual respect","separation, rejection, division, imbalance, tension, bad communication, withdrawal"],
    ["3 of Cups","friendship, community, gatherings, celebrations, group events, social events"," events, social events	gossip, scandal, excess, isolation, loneliness, solitude, imbalanced social life"],
    ["4 of Cups","apathy, contemplation, feeling disconnected, melancholy, boredom, indifference, discontent","clarity, awareness, acceptance, choosing happiness, depression, negativity"],
    ["5 of Cups","loss, grief, disappointment, sadness, mourning, discontent, feeling let down","acceptance, moving on, finding peace, contentment, seeing positives"],
    ["6 of Cups","nostalgia, memories, familiarity, healing, comfort, sentimentality, pleasure","stuck in past, moving forward, leaving home, independence"],
    ["7 of Cups","choices, searching for purpose, illusion, fantasy, daydreaming, wishful thinking, indecision","lack of purpose, disarray, confusion, diversion, distractions, clarity, making choices"],
    ["8 of Cups","abandonment, walking away, letting go, searching for truth, leaving behind","stagnation, monotony, accepting less, avoidance, fear of change, staying in bad situation"],
    ["9 of Cups","wishes coming true, contentment, satisfaction, success, achievements, recognition, pleasure","unhappiness, lack of fulfillment, disappointment, underachievement, arrogance, snobbery"],
    ["10 of Cups","happiness, homecomings, fulfillment, emotional stability, security, domestic harmony","unhappy home, separation, domestic conflict, disharmony, isolation​"],
    ["Ace of Cups","love, new feelings, emotional awakening, creativity, spirituality, intuition","coldness, emptiness, emotional loss, blocked creativity, feeling unloved, gloominess"],
    ["King of Cups","wise, diplomatic, balance between head and heart, devoted, advisor, counsellor","overwhelmed, anxious, cold, repressed, withdrawn, manipulative, selfish"],
    ["Knight of Cups","idealist, charming, artistic, graceful, tactful, diplomatic, mediator, negotiator","disappointment, tantrums, moodiness, turmoil, avoiding conflict, vanity"],
    ["Page of Cups","idealism, sensitivity, dreamer, naivete, innocence, inner child, head in the clouds","emotional vulnerability, immaturity, neglecting inner child, escapism, insecurity"],
    ["Queen of Cups","compassion, warmth, kindness, intuition, healer, counsellor, supportive","insecurity, giving too much, overly-sensitive, needy, fragile, dependence, martyrdom"],
    ["2 of Pentacles","",""],
    ["3 of Pentacles","",""],
    ["4 of Pentacles","",""],
    ["5 of Pentacles","",""],
    ["6 of Pentacles","",""],
    ["7 of Pentacles","",""],
    ["8 of Pentacles","",""],
    ["9 of Pentacles","",""],
    ["10 of Pentacles","",""],
    ["Ace of Pentacles","",""],
    ["King of Pentacles","",""],
    ["Knight of Pentacles","",""],
    ["Page of Pentacles","",""],
    ["Queen of Pentacles","",""],
    ["2 of Swords","",""],
    ["3 of Swords","",""],
    ["4 of Swords","",""],
    ["5 of Swords","",""],
    ["6 of Swords","",""],
    ["7 of Swords","",""],
    ["8 of Swords","",""],
    ["9 of Swords","",""],
    ["10 of Swords","",""],
    ["Ace of Swords","",""],
    ["King of Swords","",""],
    ["Knight of Swords","",""],
    ["Page of Swords","",""],
    ["Queen of Swords","",""],
    ["2 of Wands","planning, first steps, making decisions, leaving comfort, taking risks","bad planning, overanalyzing, not taking action, playing it safe, avoiding risk"],
    ["3 of Wands","momentum, confidence, expansion, growth, foresight, looking ahead","restriction, limitations, lack of progress, obstacles, delays, frustration"],
    ["4 of Wands","community, home, celebrations, reunions, parties, gatherings, stability, belonging","lack of support, instability, feeling unwelcome, transience, lack of roots, home conflict"],
    ["5 of Wands","conflict, competition, arguments, aggression, tension, rivals, clashes of ego","end of conflict, cooperation, agreements, truces, harmony, peace, avoiding conflict"],
    ["6 of Wands","success, victory, triumph, rewards, recognition, praise, acclaim, pride","failure, lack of recognition, no rewards, lack of achievement"],
    ["7 of Wands","protectiveness, standing up for yourself, defending yourself, protecting territory","giving up, admitting defeat, yielding, lack of self belief, surrender"],
    ["8 of Wands","movement, speed, progress, quick decisions, sudden changes, excitement","waiting, slowness, chaos, delays, losing momentum, hastiness, being unprepared"],
    ["9 of Wands","last stand, persistence, grit, resilience, perseverance, close to success, fatigue","stubbornness, rigidity, defensiveness, refusing compromise, giving up"],
    ["10 of Wands","burden, responsibility, duty, stress, obligation, burning out, struggles","failure to delegate, shouldering too much responsibility, collapse, breakdown"],
    ["Ace of Wands","inspiration, creative spark, new initiative, new passion, enthusiasm, energy","delays, blocks, lack of passion, lack of energy, hesitancy, creative blocks"],
    ["King of Wands","leadership, vision, big picture, taking control, daring decisions, boldness, optimism","forceful, domineering, tyrant, vicious, powerless, ineffective, weak leader"],
    ["Knight of Wands","courageous, energetic, charming, hero, rebellious, hot tempered, free spirit","arrogant, reckless, impatient, lack of self control, passive, volatile, domineering"],
    ["Page of Wands","adventure, excitement, fresh ideas, cheerfulness, energetic, fearless, extroverted","hasty, impatient, lacking ideas, tantrums, laziness, boring, unreliable, distracted"],
    ["Queen of Wands","confident, self-assured, passionate, determined, social, charismatic, vivacious, optimistic","demanding, vengeful, low confidence, jealous, selfish, temperamental, bully"]
];//from https://labyrinthos.co/blogs/tarot-card-meanings-list?srsltid=AfmBOooFFIeOodu6mhUcIJc2Zm325VNy1STnItCWKDbeY_7uNnMZ5Lxu