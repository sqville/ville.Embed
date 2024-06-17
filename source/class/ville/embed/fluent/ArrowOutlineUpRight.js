/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowOutlineUpRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 3.56a.5.5 0 0 0-.56-.56l-9.7 1.08a.5.5 0 0 0-.3.85l1.42 1.42a.5.5 0 0 1 0 .71l-4.71 4.72a.5.5 0 0 0 0 .7l4.37 4.37c.2.2.5.2.7 0l4.72-4.71c.2-.2.51-.2.7 0l1.43 1.42c.3.3.8.12.85-.3L17 3.56ZM16.33 2c.96-.1 1.77.7 1.66 1.66l-1.08 9.7a1.5 1.5 0 0 1-2.55.9L13.3 13.2l-4.36 4.36a1.5 1.5 0 0 1-2.12 0l-4.37-4.37a1.5 1.5 0 0 1 0-2.12L6.8 6.7 5.74 5.64a1.5 1.5 0 0 1 .89-2.55L16.33 2Z",
    FILLED : "M16.33 2c.96-.1 1.77.71 1.66 1.67l-1.08 9.7a1.5 1.5 0 0 1-2.55.9L13.3 13.2l-4.36 4.36a1.5 1.5 0 0 1-2.12 0l-4.37-4.37a1.5 1.5 0 0 1 0-2.12L6.8 6.7 5.74 5.64a1.5 1.5 0 0 1 .89-2.55L16.33 2Z"
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