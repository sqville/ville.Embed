/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LinkDismiss",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 4a.5.5 0 0 1 .09 1H6a3 3 0 0 0-.2 6H8a.5.5 0 0 1 .09 1H6a4 4 0 0 1-.22-8H8Zm6 0a4 4 0 0 1 3.52 5.9 5.49 5.49 0 0 0-.88-.47 3 3 0 0 0-2.44-4.42L14 5h-2a.5.5 0 0 1-.09-1H14ZM6 7.5h8a.5.5 0 0 1 .09 1H6a.5.5 0 0 1-.09-1H6Zm13 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.73-1.06a.5.5 0 0 0-.7-.7l-1.07 1.05-1.06-1.06a.5.5 0 0 0-.7.7l1.05 1.07-1.06 1.06a.5.5 0 0 0 .7.7l1.07-1.05 1.06 1.06a.5.5 0 0 0 .7-.7l-1.05-1.07 1.06-1.06Z",
    FILLED : "M14 4a4 4 0 0 1 3.52 5.9c-.42-.27-.87-.5-1.36-.64a2.5 2.5 0 0 0-2-3.75L14 5.5h-2a.75.75 0 0 1-.1-1.5H14ZM8 4a.75.75 0 0 1 .1 1.5H6a2.5 2.5 0 0 0-.16 5H8a.75.75 0 0 1 .1 1.5H6a4 4 0 0 1-.2-8H8ZM6.25 7.25h7.5a.75.75 0 0 1 .1 1.5h-7.6a.75.75 0 0 1-.1-1.5h.1ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.73-1.06a.5.5 0 0 0-.7-.7l-1.07 1.05-1.06-1.06a.5.5 0 0 0-.7.7l1.05 1.07-1.06 1.06a.5.5 0 0 0 .7.7l1.07-1.05 1.06 1.06a.5.5 0 0 0 .7-.7l-1.05-1.07 1.06-1.06Z"
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