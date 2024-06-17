/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NotebookEye",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 5a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7ZM6 7V6h6v1H6ZM3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.88c.28-.32.5-.65.69-.98V17H13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v7.2c-.35.1-.69.22-1 .37V4Zm13 2h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5ZM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13ZM1 15.5C1 14.32 2.74 12 5.5 12s4.5 2.3 4.5 3.5c0 1.18-1.74 3.5-4.5 3.5S1 16.7 1 15.5Zm3.11 2.08a2.5 2.5 0 1 0 2.78-4.16 2.5 2.5 0 0 0-2.78 4.16Zm2.64-1.25a1.5 1.5 0 1 0-2.5-1.66 1.5 1.5 0 0 0 2.5 1.66Z",
    FILLED : "M5 2a2 2 0 0 0-2 2v7.57a5.8 5.8 0 0 1 6.47 1c.88.82 1.53 1.94 1.53 2.93a3.3 3.3 0 0 1-.43 1.52c-.18.33-.41.66-.7.98H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1ZM16 6h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13ZM1 15.5C1 14.32 2.74 12 5.5 12s4.5 2.3 4.5 3.5c0 1.18-1.74 3.5-4.5 3.5S1 16.7 1 15.5Zm3.11 2.08a2.5 2.5 0 1 0 2.78-4.16 2.5 2.5 0 0 0-2.78 4.16Zm2.64-1.25a1.5 1.5 0 1 0-2.5-1.66 1.5 1.5 0 0 0 2.5 1.66Z"
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