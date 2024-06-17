/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextSubscript",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.54 4.12c.2.18.23.5.05.7L9.16 10l4.08 4.77c-.18.29-.34.63-.42 1.04L8.5 10.77l-4.34 5.06a.5.5 0 1 1-.75-.66L7.84 10 3.41 4.83a.5.5 0 1 1 .75-.66L8.5 9.23l4.33-5.06a.5.5 0 0 1 .7-.05ZM15.58 12c-.46 0-.83.42-.83.86a.5.5 0 0 1-1 0 1.87 1.87 0 0 1 3.42-1.04c.36.55.37 1.27-.04 1.98-.21.36-.5.63-.79.86l-.42.3-.06.05-.34.24c-.32.24-.55.47-.67.75h2.1a.5.5 0 1 1 0 1H14.3a.54.54 0 0 1-.05 0 .5.5 0 0 1-.5-.5c0-1.04.6-1.62 1.17-2.05l.36-.26.06-.04.38-.28c.24-.19.42-.37.55-.58.25-.43.19-.73.07-.92a.89.89 0 0 0-.76-.37Z",
    FILLED : "M13.78 4.99A.75.75 0 0 0 12.64 4L8.5 8.85 4.35 4A.75.75 0 1 0 3.22 5L7.52 10l-4.3 5.01a.75.75 0 0 0 1.13.98l4.15-4.84 3.85 4.5c.13-.55.38-.99.66-1.34-.35-.24-.6-.6-.71-1.03L9.49 10l4.3-5.01Zm1.55 7.26c-.3 0-.58.3-.58.61a.75.75 0 0 1-1.5 0 2.12 2.12 0 0 1 3.88-1.17c.42.64.42 1.46-.04 2.24-.23.4-.55.69-.84.92l-.44.32-.06.05-.33.23c-.14.1-.25.2-.35.3h1.62a.75.75 0 0 1 0 1.5h-2.64a.73.73 0 0 1-.05 0 .75.75 0 0 1-.75-.75c0-1.16.69-1.8 1.27-2.25l.37-.26.06-.04.37-.28c.23-.18.38-.34.48-.5.21-.36.14-.57.08-.66a.64.64 0 0 0-.55-.26Z"
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