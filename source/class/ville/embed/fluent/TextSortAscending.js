/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextSortAscending",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.47 2.32a.5.5 0 0 0-.94 0l-2.75 7a.5.5 0 0 0 .94.36L4.38 8h3.24l.66 1.68a.5.5 0 0 0 .94-.36l-2.75-7ZM6 3.87 7.23 7H4.77L6 3.87ZM4 11a.5.5 0 0 0 0 1h3.07l-3.49 5.22A.5.5 0 0 0 4 18h4a.5.5 0 0 0 0-1H4.93l3.49-5.22A.5.5 0 0 0 8 11H4Zm10.5-9c.28 0 .5.22.5.5v13.8l2.15-2.15a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 .7-.7L14 16.29V2.5c0-.28.22-.5.5-.5Z",
    FILLED : "M6.7 2.5a.75.75 0 0 0-1.4 0L3.03 9a.75.75 0 0 0 1.42.5l.34-1h2.4l.34 1A.75.75 0 0 0 8.96 9L6.7 2.5ZM6 5.04 6.68 7H5.32L6 5.04ZM4 11a.75.75 0 0 0 0 1.5h2.53l-3.14 4.3A.75.75 0 0 0 4 18h4a.75.75 0 0 0 0-1.5H5.47l3.14-4.3A.75.75 0 0 0 8 11H4Zm10.25-9c.41 0 .75.34.75.75v12.57l1.45-1.58a.75.75 0 0 1 1.1 1.02l-2.75 3a.75.75 0 0 1-1.1 0l-2.75-3a.75.75 0 0 1 1.1-1.02l1.45 1.58V2.75c0-.41.34-.75.75-.75Z"
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