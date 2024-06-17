/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StarEmphasis",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.1 2.9a1 1 0 0 1 1.8 0l1.93 3.91 4.31.63a1 1 0 0 1 .56 1.7l-3.12 3.05.73 4.3a1 1 0 0 1-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 0 1-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 0 1 .56-1.7l4.31-.63L9.1 2.9Zm.9.44L8.07 7.25a1 1 0 0 1-.75.55L3 8.43l3.12 3.04a1 1 0 0 1 .3.89l-.75 4.3 3.87-2.03a1 1 0 0 1 .93 0l3.86 2.03-.74-4.3a1 1 0 0 1 .29-.89L17 8.43l-4.32-.63a1 1 0 0 1-.75-.55L10 3.35ZM4.4 12.7a.5.5 0 0 1-.08.7l-2.5 2a.5.5 0 1 1-.62-.78l2.5-2a.5.5 0 0 1 .7.08ZM4.31 5.1a.5.5 0 1 1-.62.78l-2.5-2a.5.5 0 1 1 .62-.78l2.5 2Zm11.3 7.58a.5.5 0 0 0 .08.7l2.5 2a.5.5 0 1 0 .62-.78l-2.5-2a.5.5 0 0 0-.7.08Zm.08-7.58a.5.5 0 0 0 .62.78l2.5-2a.5.5 0 1 0-.62-.78l-2.5 2Z",
    FILLED : "M9.1 2.9a1 1 0 0 1 1.8 0l1.93 3.91 4.31.63a1 1 0 0 1 .56 1.7l-3.12 3.05.73 4.3a1 1 0 0 1-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 0 1-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 0 1 .56-1.7l4.31-.63L9.1 2.9ZM4.4 12.69a.5.5 0 0 1-.08.7l-2.5 2a.5.5 0 1 1-.62-.78l2.5-2a.5.5 0 0 1 .7.08ZM4.31 5.1a.5.5 0 1 1-.62.78l-2.5-2a.5.5 0 1 1 .62-.78l2.5 2Zm11.3 7.58a.5.5 0 0 0 .08.7l2.5 2a.5.5 0 1 0 .62-.78l-2.5-2a.5.5 0 0 0-.7.08Zm.08-7.58a.5.5 0 0 0 .62.78l2.5-2a.5.5 0 1 0-.62-.78l-2.5 2Z"
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