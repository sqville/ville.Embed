/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HandDraw",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 3c0-.61-.37-1.04-.84-1.3a5.15 5.15 0 0 0-1.74-.5A37.9 37.9 0 0 0 9.53 1H9.5a.5.5 0 0 0 0 1c1.8 0 3.52 0 4.77.18.64.1 1.1.22 1.4.39.27.15.33.3.33.43 0 .15-.06.29-.31.44-.28.16-.7.29-1.3.38C13.22 4 11.64 4 10 4h-.03c-1.6 0-3.26 0-4.51.2-.63.09-1.22.24-1.66.5-.46.28-.8.7-.8 1.3 0 .8.65 1.27 1.32 1.52.7.27 1.65.4 2.68.4v-1c-.97 0-1.78-.12-2.32-.33C4.1 6.37 4 6.14 4 6c0-.15.06-.29.31-.44.28-.16.7-.29 1.3-.38C6.78 5 8.36 5 10 5h.03c1.6 0 3.26 0 4.51-.2.63-.09 1.22-.24 1.66-.5.46-.28.8-.7.8-1.3ZM9 7.5a.5.5 0 0 1 1 0V10c0 .24.17.44.4.49l2.9.59c.83.16 1.36 1 1.15 1.83l-.83 3.33a.5.5 0 0 1-.39.37l-2 .38c-.14.03-.3 0-.48-.12a1.3 1.3 0 0 1-.43-.51 3.3 3.3 0 0 0-1.43-1.51l-3.86-2.29a.94.94 0 0 1 1.23-.48l2.04.88a.5.5 0 0 0 .7-.46v-5ZM9.5 6C8.67 6 8 6.67 8 7.5v4.24l-1.34-.58a1.94 1.94 0 0 0-2.62 1.2c-.12.39.04.8.38 1l3.97 2.36h.02c.52.29.83.69 1 1.07.17.35.44.68.78.9.34.23.77.37 1.23.28l2-.38a1.5 1.5 0 0 0 1.17-1.11l.83-3.33a2.5 2.5 0 0 0-1.93-3.05L11 9.6V7.5c0-.83-.67-1.5-1.5-1.5Z",
    FILLED : "M17 3c0-.61-.37-1.04-.84-1.3a5.15 5.15 0 0 0-1.74-.5A37.9 37.9 0 0 0 9.53 1H9.5a.5.5 0 0 0 0 1c1.8 0 3.52 0 4.77.18.64.1 1.1.22 1.4.39.27.15.33.3.33.43 0 .15-.06.29-.31.44-.28.16-.7.29-1.3.38C13.22 4 11.64 4 10 4h-.03c-1.6 0-3.26 0-4.51.2-.63.09-1.22.24-1.66.5-.46.28-.8.7-.8 1.3 0 .8.65 1.27 1.32 1.52.7.27 1.65.4 2.68.4v-1c-.97 0-1.78-.12-2.32-.33C4.1 6.37 4 6.14 4 6c0-.15.06-.29.31-.44.28-.16.7-.29 1.3-.38C6.78 5 8.36 5 10 5h.03c1.6 0 3.26 0 4.51-.2.63-.09 1.22-.24 1.66-.5.46-.28.8-.7.8-1.3ZM9.5 6C8.67 6 8 6.67 8 7.5v4.24l-1.35-.58a1.94 1.94 0 0 0-2.61 1.2c-.12.39.04.8.38 1l3.97 2.36h.02c.52.29.82.69 1 1.07.17.35.44.68.78.9.34.23.77.37 1.23.28l2-.38a1.5 1.5 0 0 0 1.17-1.11l.83-3.33a2.5 2.5 0 0 0-1.93-3.05L11 9.6V7.5c0-.83-.67-1.5-1.5-1.5Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});