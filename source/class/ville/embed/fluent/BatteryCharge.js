/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BatteryCharge",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16 7.35v.98l1.17.02a.83.83 0 0 1 .82.73l.01.1v1.67a.83.83 0 0 1-.72.82l-.11.01H16v.82a2.5 2.5 0 0 1-2.35 2.5H7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6.76c.65 0 1.18-.5 1.24-1.13V7.25c0-.65-.49-1.19-1.12-1.25H9.54C9.2 6 9 5.85 9 5.5s.22-.5.54-.5h3.96A2.5 2.5 0 0 1 16 7.35ZM6.3 3.34h.08c.31 0 .57.23.62.53V5h.38c.34 0 .62.29.62.63v1.91C8 8.34 7.35 9 6.54 9H3.46C2.66 9 2 8.35 2 7.54v-1.9c0-.35.28-.63.63-.63H3V3.96c0-.31.24-.57.54-.61l.08-.01c.32 0 .58.23.62.54l.01.08v1.05h1.5V3.95c0-.32.24-.58.54-.62ZM5.5 9v5.5a.5.5 0 1 1-1 0V9h1ZM7 6v1.5a.5.5 0 0 1-.41.5H3.5a.5.5 0 0 1-.5-.4V6h4Z",
    FILLED : "M9.63 5h3.87A2.5 2.5 0 0 1 16 7.37v.98h1.17a.83.83 0 0 1 .82.73l.01.1v1.67a.83.83 0 0 1-.72.82H16v.84a2.5 2.5 0 0 1-2.35 2.5H7.12a.63.63 0 0 1-.62-.54v-3.84c0-.31.23-.57.54-.62H7.85c.6 0 1.09-.46 1.14-1.04l.01-.1V5.62c0-.32.24-.58.54-.62h3.96-3.88ZM6.29 3.34h.09c.31 0 .57.23.62.53V5h.38c.34 0 .62.29.62.63v1.91C8 8.34 7.35 9 6.54 9h-.92v5.38c0 .31-.23.57-.54.61L5 15a.63.63 0 0 1-.62-.54V9h-.92C2.66 9 2 8.35 2 7.54v-1.9c0-.35.28-.63.63-.63H3V3.96c0-.31.24-.57.54-.61l.08-.01c.32 0 .58.23.62.54l.01.08v1.05h1.5V3.95c0-.32.24-.58.54-.62h.09-.09Z"
  }
});