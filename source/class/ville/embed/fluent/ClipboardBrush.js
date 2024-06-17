/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ClipboardBrush",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.77a2 2 0 0 0-.41.32l-.59.58V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h1.59c.05.15.13.3.23.43.16.2.34.4.52.57H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm9.2 7.3a1 1 0 0 1 0 1.4l-2.87 2.89c.35.9.16 1.95-.56 2.68a4.12 4.12 0 0 1-6.16-.46.5.5 0 0 1 .25-.79c1.07-.32 1.38-.65 1.55-.93.07-.11.12-.22.18-.35l.1-.23a2.5 2.5 0 0 1 3.22-1.34l2.88-2.88a1 1 0 0 1 1.42 0Zm-4.14 4.14a1.5 1.5 0 0 0-2.12 0c-.16.16-.25.32-.34.5l-.07.15a2.75 2.75 0 0 1-1.63 1.62 3.1 3.1 0 0 0 4.16-.15 1.5 1.5 0 0 0 0-2.12Z",
    FILLED : "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v4.77a2 2 0 0 0-.41.32l-2.47 2.46a3.5 3.5 0 0 0-3.82 2.02l-.15.32c-.03.08-.05.11-.1.18a.41.41 0 0 1-.14.14c-.11.08-.35.2-.84.35a1.5 1.5 0 0 0-.75 2.37c.16.2.34.4.52.57H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm9.2 7.3a1 1 0 0 1 0 1.4l-2.87 2.89c.35.9.16 1.95-.56 2.68a4.12 4.12 0 0 1-6.16-.46.5.5 0 0 1 .25-.79c1.07-.32 1.38-.65 1.55-.93.07-.11.12-.22.18-.35l.1-.23a2.5 2.5 0 0 1 3.22-1.34l2.88-2.88a1 1 0 0 1 1.42 0Zm-4.14 4.14a1.5 1.5 0 0 0-2.12 0c-.16.16-.25.32-.34.5l-.07.15a2.75 2.75 0 0 1-1.63 1.62 3.1 3.1 0 0 0 4.16-.15 1.5 1.5 0 0 0 0-2.12Z"
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