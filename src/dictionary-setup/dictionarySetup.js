import { readFile, writeFile } from 'fs';
import { Parser } from 'xml2js';
const parser = new Parser();

// Read the XML file
readFile('tezaurs_2024_2_tei_modified.xml', (err, data) => {
  if (err) throw err;
  // Parse the XML data
  parser.parseString(data, (err, result) => {
    if (err) throw err;
    const words = result.TEI.body[0].entry.map((entry) => {
      if (entry['$'].n === '1') {
        const form = entry.form[0].orth[0]._;
        const sense = entry.sense.map((sense) => sense.def);
        return { form, sense };
      }
    });
    // Write the words to a JSON file
    writeFile('dictionary.json', JSON.stringify(words, null, 2), (err) => {
      if (err) throw err;
      console.log('Entries have been extracted to dictionary.json');
    });
  });
});
