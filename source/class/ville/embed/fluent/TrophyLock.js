/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TrophyLock",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 7a3 3 0 0 0 2.6 2.97 4.5 4.5 0 0 0 3.9 3.5v1.5h-2a2 2 0 0 0-2 2v.5c0 .27.23.5.5.5h5.25A2 2 0 0 1 11 17v-.03H6.5a1 1 0 0 1 1-1H11v-1h-.5v-1.5c.17-.02.34-.04.5-.08V13a2 2 0 0 1 .12-.68A3.5 3.5 0 0 1 6.5 9.16V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4.76a3 3 0 0 1 1-.59V5h1c.27 0 .5.22.5.5V7c0 .37-.1.71-.27 1 .35.03.68.12 1 .26.17-.38.27-.8.27-1.26V5.5c0-.83-.68-1.5-1.5-1.5h-1a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2h-1C3.67 4 3 4.67 3 5.5V7Zm1.5-2h1v3.93A2 2 0 0 1 4 7V5.5c0-.28.22-.5.5-.5Zm9 6v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
    FILLED : "M5.5 4c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2h1c.82 0 1.5.67 1.5 1.5V7c0 .45-.1.88-.28 1.26-.3-.14-.64-.23-1-.25.18-.3.28-.64.28-1V5.5a.5.5 0 0 0-.5-.5h-1v3.17a3 3 0 0 0-2 2.83v.06A2 2 0 0 0 11 13v.39c-.16.04-.33.06-.5.08v1.5h.5V17c0 .35.1.68.25.97H6a.5.5 0 0 1-.5-.5v-.5c0-1.1.9-2 2-2h2v-1.5a4.5 4.5 0 0 1-3.9-3.5A3 3 0 0 1 3 7V5.5C3 4.67 3.67 4 4.5 4h1Zm0 1h-1a.5.5 0 0 0-.5.5V7a2 2 0 0 0 1.5 1.93V5Zm8 6v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
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