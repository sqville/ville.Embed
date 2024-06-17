/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LayerDiagonalAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.5 3.5a.5.5 0 0 0-.68-.46L3.95 5.36A1.5 1.5 0 0 0 3 6.76v5.74c0 .35.36.6.68.46l.32-.12v1.07c-.97.35-2-.37-2-1.41V6.75a2.5 2.5 0 0 1 1.58-2.32l5.87-2.32a1.5 1.5 0 0 1 2.05 1.3l-1 .4v-.3Zm3 2a.5.5 0 0 0-.68-.46L6.63 7.49a1 1 0 0 0-.63.93v6.08c0 .35.36.6.68.46L8 14.44v1.08l-.95.37A1.5 1.5 0 0 1 5 14.5V8.43a2 2 0 0 1 1.26-1.86l6.19-2.45a1.5 1.5 0 0 1 2.05 1.4v.1l-1 .39v-.5Zm2.82 1.54a.5.5 0 0 1 .68.46v2.7c.35.1.68.24 1 .4V7.5a1.5 1.5 0 0 0-2.05-1.4l-6 2.38A1.5 1.5 0 0 0 9 9.88v6.62c0 .9.77 1.55 1.6 1.5a5.47 5.47 0 0 1-.43-1.12.5.5 0 0 1-.17-.38V9.88c0-.2.13-.4.32-.47l6-2.37ZM20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5Z",
    FILLED : "M9.45 2.1a1.5 1.5 0 0 1 2.05 1.3L5.42 5.82A2.25 2.25 0 0 0 4 7.91v6c-.97.35-2-.37-2-1.41V6.75a2.5 2.5 0 0 1 1.58-2.32l5.87-2.32Zm3 2a1.5 1.5 0 0 1 2.05 1.4v.1L9.26 7.68A2 2 0 0 0 8 9.54v5.98l-.95.37A1.5 1.5 0 0 1 5 14.5V8.43a2 2 0 0 1 1.26-1.86l6.19-2.45ZM18 7.5v3.1a5.5 5.5 0 0 0-7.4 7.4A1.5 1.5 0 0 1 9 16.5V9.88c0-.62.38-1.17.95-1.4l6-2.37A1.5 1.5 0 0 1 18 7.5Zm2 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5Z"
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