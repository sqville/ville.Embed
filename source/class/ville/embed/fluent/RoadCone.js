/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.RoadCone",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.38 2a1 1 0 0 0-.96.74L4.62 17H2.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-2.12l-3.8-14.26a1 1 0 0 0-.96-.74H9.38ZM5.65 17l.8-3h5.05a.5.5 0 0 0 0-1H6.72l.53-2h3.25a.5.5 0 0 0 0-1H7.52l1.86-7h1.24l3.73 14h-8.7Z",
    FILLED : "M8.42 2.76A1 1 0 0 1 9.4 2h1.23a1 1 0 0 1 .96.74L15.38 17h2.12a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h2.11l.8-3h6.09a.5.5 0 0 0 0-1H5.69l.45-1.63.1-.37h4.26a.5.5 0 0 0 0-1H6.52c.68-2.48 1.35-4.96 1.9-7.24Z"
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