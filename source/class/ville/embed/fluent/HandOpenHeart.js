/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HandOpenHeart",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m14.5 3-.63-.49a2.4 2.4 0 0 0-3.24 3.5l3.5 3.83c.2.22.54.22.74 0l3.5-3.83a2.4 2.4 0 0 0-3.24-3.5l-.63.5Zm1.38 10.09-.82-2.2c.2-.07.39-.2.55-.37l.25-.28.94 2.49A3 3 0 0 1 16 16l-1.22 1.1c-.61.54-1.4.83-2.22.82a4 4 0 0 1-1.5-.3 18.4 18.4 0 0 0-6.85-1.24 1.21 1.21 0 0 1-1.08-.6 1 1 0 0 1 0-1 4.2 4.2 0 0 1 2.75-1.7L2.42 9.63a1.56 1.56 0 0 1 .47-2.53 1.56 1.56 0 0 1 1.66-2.54 1.55 1.55 0 0 1 2.58-.63c.08-.18.19-.34.32-.48a1.58 1.58 0 0 1 1.78-.3c-.12.33-.2.67-.22 1.02L9 4.16a.6.6 0 0 0-.84.84l.7.65 1.32 1.36 1.25 1.36a.48.48 0 0 1-.13.48.48.48 0 0 1-.7 0L8.1 6.36l-.7-.7-1-1.06a.58.58 0 0 0-.8 0 .57.57 0 0 0 0 .8l2.75 2.75a.5.5 0 0 1-.7.7L5.79 7l-1.4-1.4a.56.56 0 0 0-.95.4c0 .15.05.3.16.4l1.07 1.06 2.18 2.19a.5.5 0 0 1-.7.7L5 9.21 3.96 8.17a.56.56 0 0 0-.79 0 .52.52 0 0 0-.17.39.56.56 0 0 0 .17.44l4.19 4.15A.5.5 0 0 1 7 14s-2.15 0-2.99 1.35c0 .04.08.11.2.11h.14c2.43 0 4.83.44 7.1 1.31a2.51 2.51 0 0 0 2.66-.33l1.25-1.15a2 2 0 0 0 .52-2.2Zm-6.16.86c.4-.2 1.04-.32 1.7-.2.64.1 1.26.42 1.66 1.03a.5.5 0 0 0 .84-.56 3.42 3.42 0 0 0-2.34-1.46c-.84-.14-1.7 0-2.3.3a.5.5 0 0 0 .44.89Z",
    FILLED : "m13.4 10.52-3.36-3.67a.6.6 0 0 1-.87.01L5.28 2.97a.75.75 0 1 0-1.06 1.06l3.86 3.86a.58.58 0 1 1-.81.82L3.28 4.72a.75.75 0 0 0-1.06 1.06l4.05 4.05a.49.49 0 0 1-.69.7l-2.3-2.31a.75.75 0 0 0-1.06 1.06l3.82 3.82-.5.12c-.78.21-1.78.65-2.38 1.6A1 1 0 0 0 3.22 16c.23.3.6.48 1 .47 2.15-.01 4.77.39 6.85 1.24 1.2.5 2.69.43 3.71-.52l1.25-1.15a3 3 0 0 0 .77-3.3l-.97-2.46-.22.25a1.5 1.5 0 0 1-2.22 0Zm-3.68 3.43a.5.5 0 0 1-.44-.9c.6-.3 1.46-.43 2.3-.3.86.15 1.74.58 2.34 1.47a.5.5 0 0 1-.84.56 2.42 2.42 0 0 0-1.66-1.04c-.66-.1-1.3 0-1.7.2ZM9.34 2.92a3.4 3.4 0 0 0-.3 2.04L7.23 3.03a.75.75 0 1 1 1.06-1.06c.29.29.65.6 1.06.95ZM14.5 3l-.63-.49a2.4 2.4 0 0 0-3.24 3.5l3.5 3.83c.2.22.54.22.74 0l3.5-3.83a2.4 2.4 0 0 0-3.24-3.5l-.63.5Z"
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