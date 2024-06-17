/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SparkleCircle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-8 7a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5.17-4.42a.87.87 0 0 1 1.65 0l.26.73c.1.28.33.5.61.6l.73.26a.87.87 0 0 1 0 1.65l-.73.26a1 1 0 0 0-.6.61l-.27.73a.87.87 0 0 1-1.65 0l-.25-.73a1 1 0 0 0-.61-.6l-.73-.27a.88.88 0 0 1 0-1.65l.73-.25a1 1 0 0 0 .6-.61l.26-.73Zm5.5 4.42a.7.7 0 0 0-1.34 0l-.18.6a.83.83 0 0 1-.56.55l-.59.18a.7.7 0 0 0 0 1.34l.6.18c.26.08.47.29.55.56l.18.6a.7.7 0 0 0 1.34 0l.18-.6a.83.83 0 0 1 .56-.56l.6-.18a.7.7 0 0 0 0-1.34l-.6-.18a.83.83 0 0 1-.56-.56l-.18-.59Z",
    FILLED : "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM8.82 5.58l.26.73c.1.28.33.5.61.6l.73.26a.87.87 0 0 1 0 1.65l-.73.26a1 1 0 0 0-.6.61l-.27.73a.87.87 0 0 1-1.65 0l-.25-.73a1 1 0 0 0-.61-.6l-.73-.27a.88.88 0 0 1 0-1.65l.73-.25a1 1 0 0 0 .6-.61l.26-.73a.87.87 0 0 1 1.65 0ZM11.33 10a.7.7 0 0 1 1.34 0l.18.6c.08.26.29.47.56.55l.6.18a.7.7 0 0 1 0 1.34l-.6.18a.83.83 0 0 0-.56.56l-.18.6a.7.7 0 0 1-1.34 0l-.18-.6a.83.83 0 0 0-.56-.56l-.59-.18a.7.7 0 0 1 0-1.34l.6-.18a.83.83 0 0 0 .55-.56l.18-.6Z"
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