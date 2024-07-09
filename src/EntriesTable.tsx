import React, { useState } from 'react';
import Pagination from './Pagination';

import styled from 'styled-components';
import DefinitionDialog from './DefinitionDialog';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 1rem;
  padding: 1rem 2rem;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  background-color: white;
  border-radius: 10px;
`;

interface EntriesTableProps {
  dictionary: ScrabbleWord[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const TableRow = styled.tr`
  &:hover {
    background-color: #f1f1f1;
  }
  &:last-child td {
    padding: 0 0 16px 0;
  }
  text-align: center;
`;

const TableHeadCell = styled.th`
  padding: 16px 0;
  word-break: break-word;
`;

const TableCell = styled.td`
  word-break: break-word;
`;

type ScrabbleWord = {
  form: string;
  sense: string[];
  value: number;
};

const EntriesTable: React.FC<EntriesTableProps> = ({
  dictionary,
  currentPage,
  setCurrentPage,
}) => {
  const [showDefinition, setShowDefinition] = useState(false);
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState<string[]>([]);

  const entriesPerPage = 10;

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;

  const entries = dictionary
    .sort((a, b) => b.value - a.value)
    .slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeadCell>Vārds</TableHeadCell>
            <TableHeadCell>Burtu Skaits</TableHeadCell>
            <TableHeadCell>Vērtība</TableHeadCell>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <TableRow
              key={index}
              onClick={() => {
                setWord(entry.form);
                setDefinition(entry.sense as string[]);
                setShowDefinition(true);
              }}
              style={{ cursor: 'pointer' }}
            >
              <TableCell>{entry.form}</TableCell>
              <TableCell>{entry.form.length}</TableCell>
              <TableCell>{entry.value}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <DefinitionDialog
        showDefinition={showDefinition}
        setShowDefinition={setShowDefinition}
        word={word}
        definition={definition}
      />
      <div style={{ marginTop: '2rem' }}>
        {/* Pagination */}
        {dictionary.length > entriesPerPage && (
          <Pagination
            currentPage={currentPage}
            totalCount={Math.ceil(dictionary.length / entriesPerPage)}
            onPageChange={paginate}
            pageSize={1}
          />
        )}
      </div>
    </Container>
  );
};

export default EntriesTable;
