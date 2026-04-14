---
title: 'Πώς να ρυθμίσετε το θέμα AstroScholar'
description: 'Ένας ολοκληρωμένος οδηγός για τη ρύθμιση του θέματος AstroScholar.'
pubDate: '2026-04-03'
authors:
  - shravan-goswami
toc: true
tags:
  - astro
  - tutorial
  - theme
---

Η ρύθμιση του θέματος AstroScholar είναι απλή. Σε αυτόν τον οδηγό, θα εξετάσουμε τη διαμόρφωση του `consts.ts`, την πλοήγηση και την προσθήκη περιεχομένου στις διάφορες συλλογές.

## Ξεκινώντας

Πρώτα, βεβαιωθείτε ότι έχετε εγκαταστήσει τις απαιτούμενες εξαρτήσεις εκτελώντας `npm install`.

Στη συνέχεια, ανοίξτε το `src/consts.ts` και τροποποιήστε τον προεπιλεγμένο τίτλο ιστοτόπου, την περιγραφή και τους συνδέσμους κοινωνικών δικτύων.

```ts
export const SITE_TITLE = 'My Academic Portfolio';
export const SITE_DESCRIPTION = 'The academic portfolio of John Doe.';
```

## Προσθήκη Συγγραφέων

Μπορείτε να διαχειριστείτε τους συγγραφείς στο αρχείο `src/content/data/authors.json`. Κάθε συγγραφέας πρέπει να έχει ένα `id`, `name` και προαιρετικά `avatar`, `url` και `affiliation`.
