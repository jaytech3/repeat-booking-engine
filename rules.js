// Shared by the build step (Node) and the page (browser). Rule-based v1 of the discovery engine.
const RULES = {
  scope: {
    instahelp: /insta ?help|insta maid|instamaid|house ?help|\bmaids?\b|15 ?min|per hour|hourly/i,
    native_product: /\bnative\b|purifier you|m[23] ?pro|smart lock|door lock/i
  },
  category: {
    "Salon and spa": /salon|wax|facial|hair ?cut|haircut|massage|spa\b|beautician|pedicure|manicure|threading|makeup/i,
    "Cleaning": /deep clean|cleaning|cleaner|sofa|carpet|bathroom clean|kitchen clean|chimney clean/i,
    "AC": /\bac\b|a\.c\.|air ?condition|gas refill|cooling/i,
    "Appliance repair": /washing machine|fridge|refrigerator|\bro\b|water purifier|geyser|microwave|chimney|tv\b|television/i,
    "Plumber": /plumb|tap\b|leak|drain|flush|pipe/i,
    "Electrician": /electric|switch|wiring|fan\b|socket|inverter/i,
    "Carpenter": /carpent|door|hinge|cupboard|furniture|drill/i,
    "Pest control": /pest|cockroach|termite|bed ?bug/i,
    "Painting": /paint/i
  },
  theme: {
    "Support and refunds": /customer (care|support|service)|chat ?bot|refund|no response|helpline|call ?back/i,
    "Slots, cancellations, no-shows": /no slots?|cancel+ed|cancel+ation|resched|did ?n.?t (come|show|turn)|no[- ]show|late by|not available|never (came|arrived|showed)/i,
    "Visit fee and small-job cost": /visit(ing|ation)? (charge|fee)|minimum (order|charge|amount)|platform fee|convenience fee|small (job|work|issue|repair)|minor (work|adjust|repair|issue)|consultation|for just|\b\d+ ?min(ute)?s? (work|job)/i,
    "Diagnosis and estimate doubt": /unnecessar|not (required|needed)|upsell|up-sell|push(ed|ing)? (me )?to|spare parts?|gas refill|quoted|estimate|rate card|old part|used part|inspection/i,
    "Local alternative named": /local (guy|person|plumber|electrician|vendor|shop|parlou?r|salon|technician|carpenter|cleaner|market)|(my|our|regular) (plumber|electrician|carpenter|technician)|society|watchman|market (rate|price)|outside (rate|price)|normal (plumber|electrician|carpenter)/i,
    "Price level": /expensive|costly|over ?priced|too (high|much)|price (hike|increase)|increas(ed|ing) (the )?(price|charges)/i,
    "Long-time user who stopped": /(regular|loyal|long[- ]?time) (customer|user)|for (the )?(last |past )?\d+ (years?|yrs)|since (20\d\d|\d+ years)|used to (use|book|love)|stopped using|never (again|coming back|use)|uninstall/i,
    "Same professional wanted": /(same|preferred|favou?rite|regular) (professional|partner|beautician|lady|girl|therapist|stylist|cleaner)|book (her|him) again|choose (the |my )?(professional|partner)/i,
    "Professional skill or quality": /unskilled|untrained|not trained|no (knowledge|experience)|inexperienced|poor (quality|work)|did ?n.?t (clean|fix|do) (it )?proper|quality (has )?(dropped|gone down)|depends on (the )?(person|professional)/i,
    "Reminder or service history": /remind|service history|last service|due (for|date)|\bamc\b|annual maintenance|every (\d|three|six|few) months|periodic/i,
    "Habit and convenience (positive)": /always (use|book|prefer|rely)|whenever (i|we) need|have been using|regularly (use|book)|never disappoint|on time|punctual|convenient|hassle[- ]free/i
  }
};
function classify(text){
  const t=text||""; const out={scope:"Core service",categories:[],themes:[]};
  if(RULES.scope.instahelp.test(t)) out.scope="InstaHelp (excluded)";
  else if(RULES.scope.native_product.test(t)) out.scope="Native product (excluded)";
  for(const k in RULES.category) if(RULES.category[k].test(t)) out.categories.push(k);
  for(const k in RULES.theme) if(RULES.theme[k].test(t)) out.themes.push(k);
  return out;
}
if(typeof module!=="undefined") module.exports={RULES,classify};
