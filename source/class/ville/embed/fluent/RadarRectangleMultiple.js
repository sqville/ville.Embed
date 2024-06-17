/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.RadarRectangleMultiple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m14.5 3.38-.72.72A7 7 0 0 0 3.08 11H2.05A7.99 7.99 0 0 1 14.5 3.38ZM9.83 18a3 3 0 0 0 .17-1c1.8 0 3.58-.68 4.95-2.05a.5.5 0 0 1 .7.7A7.98 7.98 0 0 1 9.84 18Zm.17-3.5v.5c1.28 0 2.56-.49 3.54-1.46a.5.5 0 1 0-.71-.71c-.8.8-1.86 1.2-2.92 1.17.06.16.09.32.09.5ZM5.1 11h1.03a4 4 0 0 1 5.43-4.68l.75-.75A5 5 0 0 0 5.1 11Zm10.75-6.85c.2.2.2.5 0 .7l-4.88 4.9a1 1 0 1 1-.71-.72l4.89-4.88c.2-.2.5-.2.7 0ZM17 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM16.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5 4.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-2.5 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM1.5 12a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-5Zm7 2c.28 0 .5.22.5.5V17a2 2 0 0 1-2 2H3.5a.5.5 0 0 1 0-1H7a1 1 0 0 0 1-1v-2.5c0-.28.22-.5.5-.5Z",
    FILLED : "m14.28 3.24-1.09 1.1A6.5 6.5 0 0 0 3.58 11H2.06a7.99 7.99 0 0 1 12.22-7.76ZM10 17v-.5c1.66 0 3.33-.63 4.6-1.9a.75.75 0 0 1 1.06 1.06A7.98 7.98 0 0 1 9.83 18a3 3 0 0 0 .17-1Zm0-2.5v.6c1.3 0 2.61-.5 3.6-1.5a.75.75 0 1 0-1.05-1.05 3.6 3.6 0 0 1-2.86 1.04c.2.25.31.57.31.91ZM6.5 11h.04A3.6 3.6 0 0 1 11 6.54l1.16-1.17A5.1 5.1 0 0 0 5 11h1.5Zm9.28-6.78c.3.3.3.77 0 1.06l-4.33 4.33a1.5 1.5 0 1 1-1.06-1.06l4.33-4.33c.3-.3.77-.3 1.06 0Zm1.47 9.03a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm1.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM1.5 12a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-5Zm7 2c.28 0 .5.22.5.5V17a2 2 0 0 1-2 2H3.5a.5.5 0 0 1 0-1H7a1 1 0 0 0 1-1v-2.5c0-.28.22-.5.5-.5Z"
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