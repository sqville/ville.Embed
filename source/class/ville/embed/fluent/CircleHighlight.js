/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CircleHighlight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.71 3a7.1 7.1 0 0 1 1.73.15l2.2 2.2a.5.5 0 0 0 .72-.7l-.47-.47a7 7 0 1 1-9.72 9.7l.48.47a.5.5 0 1 0 .7-.7l-2.2-2.21A7.03 7.03 0 0 1 3 9.7l1.89 1.9a.5.5 0 1 0 .7-.71L3.18 8.46c.1-.41.22-.82.39-1.2L5.9 9.6a.5.5 0 1 0 .7-.7L4.05 6.33c.2-.32.42-.63.67-.91l2.44 2.43a.5.5 0 1 0 .7-.7L5.43 4.7c.28-.25.59-.47.91-.67L8.9 6.6a.5.5 0 1 0 .7-.7L7.27 3.55c.39-.16.79-.29 1.2-.38L10.9 5.6a.5.5 0 0 0 .7-.7L9.72 3ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
    FILLED : "M4 4.7c-.25.29-.48.59-.69.9l3.3 3.3a.5.5 0 1 1-.71.7L2.8 6.5c-.18.37-.33.75-.45 1.15L5.6 10.9a.5.5 0 0 1-.7.7L2.09 8.8a8.06 8.06 0 0 0-.08 1.5l3.34 3.35a.5.5 0 0 1-.7.7l-2.41-2.4a8 8 0 1 0 9.7-9.71l2.41 2.4a.5.5 0 0 1-.7.71L10.3 2.01a8.14 8.14 0 0 0-1.5.08l2.8 2.8a.5.5 0 0 1-.7.71L7.65 2.35c-.4.12-.78.27-1.14.45l3.1 3.1a.5.5 0 1 1-.71.7L5.6 3.31c-.31.21-.61.44-.9.7l3.15 3.14a.5.5 0 1 1-.7.7L4 4.71Z"
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