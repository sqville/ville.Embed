/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PlaySettings",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.22 8.69a1.5 1.5 0 0 1 0 2.62l-5.23 2.88a5.5 5.5 0 0 0-.16-1.05l4.9-2.7a.5.5 0 0 0 0-.88l-9.99-5.5A.5.5 0 0 0 6 4.5v4.52c-.34.03-.68.1-1 .19V4.5a1.5 1.5 0 0 1 2.22-1.32l10 5.5ZM4.06 11.44a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 4 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 9 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55ZM6.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    FILLED : "M17.22 8.68a1.5 1.5 0 0 1 0 2.63L12 14.2A5.5 5.5 0 0 0 5 9.2V4.5a1.5 1.5 0 0 1 2.23-1.32l10 5.5ZM4.06 11.44a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 4 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 9 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55ZM6.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
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