# Repeat Booking Discovery Engine

A discovery workflow that analyses public Google Play reviews of the Urban Company app to understand why customers do or do not book again within 90 days.

Live: https://jaytech3.github.io/repeat-booking-engine/

## How it works
1. Collect the newest public Play Store reviews (India, English).
2. Keep detailed reviews (12 words or more).
3. Remove reviews about InstaHelp and Native hardware, which the 90-day repeat metric excludes.
4. Tag each review with service category and themes (`rules.js`).
5. Reweight by star rating to correct for negativity bias.
6. Compare raw and reweighted theme shares, and read the evidence.

## Files
- `index.html` the explorer and live classifier
- `rules.js` the classification rules, shared by the build step and the page
- `data.json` coded reviews (text shortened)

## Known limits
Silent non-returners do not write reviews, rules miss about half of reviews, English only, one store, about three months of data.
