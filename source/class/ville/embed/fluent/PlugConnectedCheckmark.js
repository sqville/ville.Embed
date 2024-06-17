/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PlugConnectedCheckmark",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.85 2.85a.5.5 0 0 0-.7-.7L14.48 4.8a4.04 4.04 0 0 0-5.33.34l-.3.3a1.49 1.49 0 0 0 0 2.1l2.46 2.47c.28-.2.58-.38.9-.52L9.55 6.85c-.19-.2-.19-.5 0-.7l.3-.3a3.04 3.04 0 0 1 5.01 3.16c.35.02.68.08 1 .16.37-1.23.15-2.6-.67-3.65l2.66-2.67Zm-10.3 6 2.47 2.46c-.2.28-.38.58-.52.9L6.85 9.55c-.2-.19-.5-.19-.7 0l-.3.3a3.04 3.04 0 0 0 3.16 5.01c.02.35.08.68.16 1-1.23.37-2.6.15-3.65-.67l-2.67 2.66a.5.5 0 0 1-.7-.7l2.66-2.67a4.04 4.04 0 0 1 .34-5.33l.3-.3a1.49 1.49 0 0 1 2.1 0ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    FILLED : "M17.78 3.28a.75.75 0 0 0-1.06-1.06l-2.45 2.45a4.04 4.04 0 0 0-5.12.48l-.3.3a1.49 1.49 0 0 0 0 2.1l2.46 2.47a5.48 5.48 0 0 1 4.55-.85 4.04 4.04 0 0 0-.53-3.44l2.45-2.45ZM7.55 8.85l2.47 2.46a5.48 5.48 0 0 0-.85 4.55 4.04 4.04 0 0 1-3.44-.53l-2.45 2.45a.75.75 0 0 1-1.06-1.06l2.45-2.45a4.04 4.04 0 0 1 .48-5.12l.3-.3a1.49 1.49 0 0 1 2.1 0ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"
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