import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';
import { borderRight } from '@mui/system';
const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'regno', label: 'Registration No.', minWidth: 100},
  ];
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, regno) {
  return { name, regno };
}

const rows = [
  createData('Sudharshan Srinivas M','21BCI0009'),
  createData('Bhavya Sikka','21BKT0059'),
  createData('Luha Fathima Basheer','21BCM0165'),
  createData('Gamak Sahani', '21BCE0889'),
  createData('Sumanth Rao Appala ', '21BMM0008'),
  createData('Aditya Kothari ','21BME0578'),
  createData('Atharva Karkhanis','21BBT0072'),
  createData('Orappaniyil Telvin Mario Jose', '21BCE3558'),
  createData('Shreya kachhara', '21BCE3572'),
  createData('Shraddha kachhara','21BCE3575'),
  createData('Tarun Srivastava','21BCB0006'),
  createData('Varun Krishna','21BCE0955'),
  createData('Shreyash Manindra', '21BIT0440'),
  createData('Vishal Agrawal', '21BCB0069'),
  createData('Ansh Agarwal','21BCI0298'),
  createData('Aashay Bothra','21BCE0476'),
  createData('Vansh Gupta', '21BCE0027'),
  createData('Sanidhya Nagpal', '21BCE0542'),
  createData('S.S.Madavan Annamalai','21BBS0018'),
  createData('Kshitij Takiar','21BEC0684'),
  createData('Gaurav Chindhe','21BCE2471'),
  createData('Akash das', '21BCE2368'),
  createData('Srishti Sinha', '21BDS0120'),
  createData('Roshan Rathod','21BCL0148'),
  createData('Yashita Burla','21BML0166'),
  createData('Anubhav Aryan', '21BEC0726'),
  createData('Mohmika Kapoor', '21BCT0027'),
  createData('Tejal M Prabhu','21BEE0056'),
  createData('Tanisha Bhatt','21BEC0143'),
  createData('Vivek Valsan','21BME0225'),
  createData('Aarav Shetty', '21BIT0256'),
  createData('DHRUV SHARMA', '21BIT0112'),
  createData('Abhinav awasthi','21BEE0163'),
  createData('Hari R kartha','21BCE0603'),
  createData('Abhay Varma', '21BEE0045'),
  createData('Ameya Jaiswal', '21BEE0134'),
  createData('Khush Sanghavi','21BIT0595'),
  createData('Shibam Mukherjee','21BBT0269'),
  createData('Ashlin Binshu','21BEC0958'),
  createData('Suraj Padala', '21BID0013'),
  createData('Raghav Trivedi', '21BCE0417'),
  createData('Sammit Bathla','21BBS0142'),
  createData('Nishika Jain','21BME0350'),
  createData('Shubhi Shyamsukha', '21BCB0242'),
  createData('Vikhyat Prathi', '21BIT0163'),
  createData('S V Divesh','21BIT0113'),
  createData('Ashray Srivastava','21BCE2036'),
  createData('Mohit Agnihotri','20BCE2513'),
  createData('Khushal Hiremath', '21BCE0467'),
  createData('Aayushi Singh Thakur', '21BCB0195'),
  createData('Parnika Gupta','21BBS0125'),
  createData('Abhinav Dubey','21BIT0643'),
  createData('HRIDAY AGARWAL', '21BBS0027'),
  createData('Kshitij Rai', '21BMM0002'),
  createData('Kathan Shah','21BIT0545'),
  createData('Manan Ukani','21BCE2069'),
  createData('Raghav Chaturvedi','21BBS0083'),
  createData('Shivank Mehra', '21BEI0056'),
  createData('SOPHIA AGNES J', '21BCE0248'),
  createData('Esha kashyap','21BCE0875'),
  createData('Khwab Vachhani','21BIT0097'),
  createData('Kushagra Gupta', '21BCE3567'),
  createData('Divij Bhargava ', '20BCI0163'),
  createData('Manav S Jain','20BBA0053'),
  createData('Shivank Mittal','20BCE0595'),
  createData('Rahul VijayKumar jamdade','20BIT0279'),
  createData('Saket Malpani','21BEC2119'),
  createData('Parth K. Chandrani', '21BMM0026'),
  createData('Srishti Narain', '21BCE0945'),
  createData('Prajwal R Majali','21BME0283'),
  createData('Satyanidhi Mehra','21BBT0195'),
  createData('Srinesh C.M', '20BCC0175'),
  createData('S.Architram', '21BEE0245	'),
  createData('HARSHIT RAJ',' 21BBS0219'),
createData('Adyasha','21BCE0897'),
createData('Pranit Malhotra','21BBS0087'),
createData('VIKSIT JAIN','21BME0598'),
createData('Ishaan Lakhanpal','21BCI0263'),
createData('JYOTSNA BISARIYA','21BEC0155'),
createData('Shreyas Shahapur','21BCE0673'),
createData('G Harshini','20BCC0009'),
createData('Aparna Sengar','21BBT0170'),
createData('Suprit Kothari ','21BCI0296'),
createData('kedar mashalkar','21BCE0350'),
createData('Prakriti Priya','21BCE2349'),
createData('Raunit Garg','20BCE2089'),
createData('Riddhi Snehal Panchal','21BDS0112'),
createData('Indrayudh Datta','21BML0024'),
createData('Shrihari Kulkarni','21BBS0084'),
createData('Devang Rathi','21BBT0033'),
createData('AKASH KHETAN','21BMM0007'),
createData('Ayush Das','21BCB0045'),
createData('Jayishnu Agarwal','21BEC0308'),
createData('Suhani Gujrati','21BCE0903'),
createData('Kavinraj SR','21BCE0341'),
createData('Sahil Harwani','21BBS0101'),
createData('Gokull Sridhar','21BEE0017'),
];

export default function CustomPaginationActionsTableManagement() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.regno}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

