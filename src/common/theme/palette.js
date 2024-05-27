import { grey, green, indigo } from '@mui/material/colors';

const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

// * CUSTOM CODE START * //

export default (server) => ({
  mode: 'light',
  background: {
    default: grey[50],
  },
  primary: {
    main: validatedColor(server?.attributes?.colorPrimary) || (indigo[900]),
  },
  secondary: {
    main: validatedColor(server?.attributes?.colorSecondary) || (green[800]),
  },
  neutral: {
    main: grey[500],
  },
  geometry: {
    main: '#3bb2d0',
  },
});

// export default (server, darkMode) => ({
//   mode: darkMode ? 'dark' : 'light',
//   background: {
//     default: darkMode ? grey[900] : grey[50],
//   },
//   primary: {
//     main: validatedColor(server?.attributes?.colorPrimary) || (darkMode ? indigo[200] : indigo[900]),
//   },
//   secondary: {
//     main: validatedColor(server?.attributes?.colorSecondary) || (darkMode ? green[200] : green[800]),
//   },
//   neutral: {
//     main: grey[500],
//   },
//   geometry: {
//     main: '#3bb2d0',
//   },
// });

// * CUSTOM CODE END * //
