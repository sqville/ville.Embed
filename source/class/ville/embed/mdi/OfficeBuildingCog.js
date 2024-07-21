/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.OfficeBuildingCog",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M16 13C15.87 13 15.76 13.09 15.74 13.21L15.55 14.53C15.25 14.66 14.96 14.82 14.7 15L13.46 14.5C13.35 14.5 13.22 14.5 13.15 14.63L12.15 16.36C12.09 16.47 12.11 16.6 12.21 16.68L13.27 17.5C13.25 17.67 13.24 17.83 13.24 18S13.25 18.33 13.27 18.5L12.21 19.32C12.12 19.4 12.09 19.53 12.15 19.64L13.15 21.37C13.21 21.5 13.34 21.5 13.46 21.5L14.7 21C14.96 21.18 15.24 21.35 15.55 21.47L15.74 22.79C15.76 22.91 15.86 23 16 23H18C18.11 23 18.22 22.91 18.24 22.79L18.43 21.47C18.73 21.34 19 21.18 19.27 21L20.5 21.5C20.63 21.5 20.76 21.5 20.83 21.37L21.83 19.64C21.89 19.53 21.86 19.4 21.77 19.32L20.7 18.5C20.72 18.33 20.74 18.17 20.74 18S20.73 17.67 20.7 17.5L21.76 16.68C21.85 16.6 21.88 16.47 21.82 16.36L20.82 14.63C20.76 14.5 20.63 14.5 20.5 14.5L19.27 15C19 14.82 18.73 14.65 18.42 14.53L18.23 13.21C18.22 13.09 18.11 13 18 13H16M17 16.5C17.83 16.5 18.5 17.17 18.5 18S17.83 19.5 17 19.5C16.16 19.5 15.5 18.83 15.5 18S16.17 16.5 17 16.5M16 11.08V3H2V21H8V17.5H10.03C10.26 14.2 12.77 11.54 16 11.08M6 19H4V17H6V19M6 15H4V13H6V15M6 11H4V9H6V11M6 7H4V5H6V7M12 5H14V7H12V5M12 9H14V11H12V9M10 15H8V13H10V15M10 11H8V9H10V11M8 7V5H10V7H8Z",
    OUTLINED : "M17 13C16.87 13 16.76 13.09 16.74 13.21L16.55 14.53C16.25 14.66 15.96 14.82 15.7 15L14.46 14.5C14.35 14.5 14.22 14.5 14.15 14.63L13.15 16.36C13.09 16.47 13.11 16.6 13.21 16.68L14.27 17.5C14.25 17.67 14.24 17.83 14.24 18S14.25 18.33 14.27 18.5L13.21 19.32C13.12 19.4 13.09 19.53 13.15 19.64L14.15 21.37C14.21 21.5 14.34 21.5 14.46 21.5L15.7 21C15.96 21.18 16.24 21.35 16.55 21.47L16.74 22.79C16.76 22.91 16.86 23 17 23H19C19.11 23 19.22 22.91 19.24 22.79L19.43 21.47C19.73 21.34 20 21.18 20.27 21L21.5 21.5C21.63 21.5 21.76 21.5 21.83 21.37L22.83 19.64C22.89 19.53 22.86 19.4 22.77 19.32L21.7 18.5C21.72 18.33 21.74 18.17 21.74 18S21.73 17.67 21.7 17.5L22.76 16.68C22.85 16.6 22.88 16.47 22.82 16.36L21.82 14.63C21.76 14.5 21.63 14.5 21.5 14.5L20.27 15C20 14.82 19.73 14.65 19.42 14.53L19.23 13.21C19.22 13.09 19.11 13 19 13H17M18 16.5C18.83 16.5 19.5 17.17 19.5 18S18.83 19.5 18 19.5C17.16 19.5 16.5 18.83 16.5 18S17.17 16.5 18 16.5M10 5H12V7H10V5M16 7H14V5H16V7M14 9H16V11H14V9M10 9H12V11H10V9M13.11 23H2V1H20V11.29C19.37 11.11 18.7 11 18 11V3H4V21H10V17.5H11.03C11 17.67 11 17.83 11 18C11 19.96 11.81 21.73 13.11 23M8 15H6V13H8V15M8 11H6V9H8V11M8 7H6V5H8V7M6 17H8V19H6V17M10 13H12V14.41C11.89 14.6 11.78 14.8 11.68 15H10V13Z"
  }
});