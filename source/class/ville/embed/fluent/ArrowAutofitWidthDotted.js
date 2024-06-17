/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowAutofitWidthDotted",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m15.2 16.14 1.7-1.64-1.7-1.64a.5.5 0 0 1 .69-.72l1.88 1.82c.3.3.3.79 0 1.08l-1.88 1.82a.5.5 0 1 1-.7-.72ZM17 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5a.5.5 0 0 0 1 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4.5a.5.5 0 1 0 1 0V5Zm-2 9.5a.5.5 0 0 1-.5.5H13a.5.5 0 1 1 0-1h1.5c.28 0 .5.23.5.5ZM7 15a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0 0 1H7Zm4-.5a.5.5 0 0 1-.5.5h-1a.5.5 0 1 1 0-1h1c.28 0 .5.23.5.5Zm-6.19 1.64-1.7-1.64 1.7-1.64a.5.5 0 0 0-.7-.72l-1.88 1.82c-.3.3-.3.79 0 1.08l1.89 1.82a.5.5 0 1 0 .69-.72Z",
    FILLED : "m14.77 15.71 1.51-1.46-1.51-1.46a.75.75 0 1 1 1.04-1.08l1.89 1.82a1 1 0 0 1 0 1.44l-1.89 1.82a.75.75 0 0 1-1.04-1.08Zm-9.54 0-1.5-1.46 1.5-1.46a.75.75 0 0 0-1.04-1.08l-1.88 1.82a1 1 0 0 0 0 1.44l1.88 1.82a.75.75 0 0 0 1.04-1.08ZM8 14.25c0 .42-.33.75-.75.75h-.5a.75.75 0 1 1 0-1.5h.5c.42 0 .75.34.75.75Zm1.75.75a.75.75 0 1 1 0-1.5h.5a.75.75 0 0 1 0 1.5h-.5Zm2.25-.75c0 .42.34.75.75.75h.5a.75.75 0 1 0 0-1.5h-.5a.75.75 0 0 0-.75.75ZM17 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.25a.75.75 0 0 0 1.5 0V5c0-.28.22-.5.5-.5h10c.28 0 .5.22.5.5v4.25a.75.75 0 1 0 1.5 0V5Z"
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