/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SlideEraser",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h6c0-.34.08-.69.23-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4.23c.21.11.41.25.6.43l.4.41V6a2 2 0 0 0-2-2H4Zm11.12 7.37a1.25 1.25 0 0 1 1.76 0l1.75 1.75c.5.48.5 1.28 0 1.76l-2.57 2.58-3.52-3.52 2.58-2.57Zm-3.18 3.17-.57.58a1.25 1.25 0 0 0 0 1.76l1.75 1.75c.48.5 1.28.5 1.76 0l.58-.57-3.52-3.52Z",
    FILLED : "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v5.07l-.4-.41a2.25 2.25 0 0 0-3.2 0l-3.74 3.75A2.24 2.24 0 0 0 10 16H4a2 2 0 0 1-2-2V6Zm13.12 5.37a1.25 1.25 0 0 1 1.76 0l1.75 1.75c.5.48.5 1.28 0 1.76l-2.57 2.58-3.52-3.52 2.58-2.57Zm-3.18 3.17-.57.58a1.25 1.25 0 0 0 0 1.76l1.75 1.75c.48.5 1.28.5 1.76 0l.58-.57-3.52-3.52Z"
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