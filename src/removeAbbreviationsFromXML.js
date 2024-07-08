import fs from 'fs';
import { DOMParser, XMLSerializer } from 'xmldom';

// Read the XML file
const xml = fs.readFileSync('tezaurs_2024_2_tei.xml', 'utf-8');

// Parse the XML
const parser = new DOMParser();
const doc = parser.parseFromString(xml, 'text/xml');

// Find all entry elements
const entries = doc.getElementsByTagName('entry');

// Convert HTMLCollection to array to avoid live collection issues during removal
const entriesArray = Array.from(entries);

entriesArray.forEach((entry) => {
  const grams = entry.getElementsByTagName('gram');
  for (let i = 0; i < grams.length; i++) {
    const gram = grams[i];
    if (
      gram.getAttribute('type') === 'Vārdšķira' &&
      gram.textContent === 'Saīsinājums'
    ) {
      entry.parentNode.removeChild(entry);
      break; // Stop checking this entry, it's already removed
    }
  }
});

// Serialize the DOM back to a string
const serializer = new XMLSerializer();
const updatedXml = serializer.serializeToString(doc);

// Save the modified XML to a new file
fs.writeFileSync('tezaurs_2024_2_tei_modified.xml', updatedXml, 'utf-8');
