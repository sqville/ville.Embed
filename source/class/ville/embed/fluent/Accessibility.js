/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Accessibility",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l1.55-3.85.03-.04L10 13h.04l.03.05 1.56 3.84a1.75 1.75 0 0 0 3.24-1.3L13 10.95v-2.3l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2ZM4.07 5.44a.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v2.3a1 1 0 0 0 .07.37l1.87 4.64a.75.75 0 0 1-1.39.56L11 12.68c-.36-.9-1.64-.9-2 0l-1.56 3.85a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99Z",
    FILLED : "M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l1.4-3.46c.08-.21.38-.21.46 0l1.4 3.46a1.75 1.75 0 0 0 3.24-1.32l-1.83-4.54a.5.5 0 0 1-.04-.19V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57Z"
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