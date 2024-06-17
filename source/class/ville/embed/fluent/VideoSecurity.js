/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoSecurity",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v.9l3.25-1.84a.5.5 0 0 1 .75.44v7a.5.5 0 0 1-.75.44L14 10.1v.9a2 2 0 0 1-2 2h-2v1a4 4 0 0 1-4 4H3.5a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h2c.83 0 1.5-.67 1.5-1.5V13H4a2 2 0 0 1-2-2V5Zm6 8v.5A2.5 2.5 0 0 1 5.5 16H4v1h2a3 3 0 0 0 3-3v-1H8Zm-4-1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1Zm10-4.96v1.91l3 1.7v-5.3l-3 1.69Z",
    FILLED : "M2 5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm13 5.66V5.33l2.25-1.27a.5.5 0 0 1 .75.44v7a.5.5 0 0 1-.75.44L15 10.66Zm-8 3.09h3v.5A3.75 3.75 0 0 1 6.25 18H3.5a.5.5 0 0 1-.5-.5v-1.75c0-.28.22-.5.5-.5h2.75c.41 0 .75-.34.75-.75v-.75Z"
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