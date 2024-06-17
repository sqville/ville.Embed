/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TvUsb",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v1.27A2 2 0 0 0 17 7V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8v.18a2 2 0 0 0 .18.82H4a2 2 0 0 1-2-2V6Zm11.5 10.91-.66-.91H5.5a.5.5 0 0 0 0 1h8v-.09ZM14 9v2a1 1 0 0 0-1 1v2.18c0 .2.07.41.19.58l1.31 1.83V18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.4l1.3-1.8a1 1 0 0 0 .2-.6V12a1 1 0 0 0-1-1V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1Zm3 2h-2V9h2v2Z",
    FILLED : "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v1.27A2 2 0 0 0 17 7h-2a2 2 0 0 0-2 2v1.27A2 2 0 0 0 12 12v2.18a2 2 0 0 0 .18.82H4a2 2 0 0 1-2-2V6Zm15 2a1 1 0 0 1 1 1v2a1 1 0 0 1 1 1v2.2a1 1 0 0 1-.2.6l-1.3 1.8V18a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.4l-1.31-1.84a1 1 0 0 1-.19-.58V12a1 1 0 0 1 1-1V9a1 1 0 0 1 1-1h2Zm0 3V9h-2v2h2Zm-3.5 5.91-.66-.91H5.5a.5.5 0 0 0 0 1h8v-.09Zm-.31-2.15-.34.24Z"
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