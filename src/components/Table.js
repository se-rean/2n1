import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, company, website, phone, inhouseSite) {
  return { name, company, website, phone, inhouseSite };
}

const rows = [
  createData('Abu Azad', 'ASA Wealth Management', '', '0426 522 843', ''),
  createData('Akhlinder Dani', 'Equimax Property Group', '', '0429928833', ''),
  createData('Aleesha Keti', 'Unleeshd You', 'https://aleeshaearthwahine.com.au/', '0431152552', ''),
  createData('Anand Birai', '	Birai Realty Pty Ltd', 'https://www.birairealty.com.au/', '0450517570', ''),
  createData('Arthur Stanicic', 'Stan3di', 'https://stan3di.com.au/', '0432089515', ''),
  createData('David Pettitt', 'Yellow brick Road', 'https://ybr.com.au/mortgage-brokers/caroline-springs', '0413999064', ''),
  createData('Fadi Guirguis', 'Certitude Finance Group', '', '0412000501', ''),
  createData('Gracie Sietu', 'Fiafia Art', '', '0406098820', ''),
  createData('Hasi Mutluel', 'Mortgage Choice - Arif & Hasi Mutluel', 'https://www.mortgagechoice.com.au/arif.mutluel/', '0410 553 752', ''),
  createData('Isidora Love', 'Food and Wine with Love', '', '0477507070', ''),
  createData('Lawrie Barber', 'Hire-a-Hubby Deer Park', '', '0429632230', ''),
  createData('Mario Conte', 'Croid Property', '', '0417999933', ''),
  createData('Michael Hashim', 'Hashim & Associates', '', '0418336500', ''),
  createData('Milton Young', 'First Class Accounts', 'https://www.firstclassaccounts.com/tullamarine/', '0421 407 345	', ''),
  createData('Olivia Ristoski', 'Zapo Conveyancing', 'https://zapoconveyancing.com.au/', '0424176731', ''),
  createData('Phoebe Preuss', 'Living Koko Pty Ltd', 'https://www.livingkoko.com/', '03 9002 0067', ''),
  createData('Tony Siljanovski', 'Building Cleaning Specialists', 'https://www.buildingcleaningspecialists.com/', '0410176671', ''),
  createData('Trish Lopez', 'Zebra Property Management', 'https://trishlopez.zebrapm.com.au/', '0400 136 979', ''), 
];

const renderHeader = (header) => {
  return (
    <TableHead>
      <TableRow>
        {
          header.map((h, i) => <TableCell sx={{ color: '#ffbf00' }}>{h.name}</TableCell> )
        }
      </TableRow>
    </TableHead>
  )
}

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, height: '100vh', backgroundColor: '#1b212c' }} aria-label="simple table">
        {renderHeader([{name: 'Member Name'}, {name: 'Company'}, {name: 'Website'}, {name: 'Phone'}, {name: '2in1 Website'}, ])}

        <TableBody>
          {rows.map((row) => (
            <TableRow 
              hover
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  sx={{ color: '#cfd6e3' }} component="th" scope="row">
                {row.name}
              </TableCell> 
              
              <TableCell sx={{ color: '#cfd6e3' }} align="left">{row.company}</TableCell> 
              <TableCell  sx={{ color: '#cfd6e3' }} align="left"><a className='hover:underline hover:underline-offset-2 hover:text-primaryText' href={row.website}>{row.website}</a></TableCell>
              <TableCell  sx={{ color: '#cfd6e3' }} align="left">{row.phone}</TableCell> 
              <TableCell  sx={{ color: '#cfd6e3' }} align="left"><a className='hover:underline hover:underline-offset-2 hover:text-primaryText' href={row.inhouseSite}>{row.inhouseSite}</a></TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
