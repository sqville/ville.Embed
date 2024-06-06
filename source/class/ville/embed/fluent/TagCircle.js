/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TagCircle",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M7.5 7C6.67 7 6 7.67 6 8.5v3c0 .83.67 1.5 1.5 1.5h4.06c.4 0 .79-.14 1.1-.39l1.78-1.44a1.5 1.5 0 0 0 0-2.34L12.66 7.4c-.31-.25-.7-.39-1.1-.39H7.5ZM7 8.5c0-.28.22-.5.5-.5h4.06c.17 0 .34.06.47.17L13.8 9.6a.5.5 0 0 1 0 .78l-1.78 1.44c-.13.11-.3.17-.47.17H7.5a.5.5 0 0 1-.5-.5v-3ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z";
   var pathdfilled = "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm4-1.5v3c0 .83.67 1.5 1.5 1.5h4.06c.4 0 .79-.14 1.1-.39l1.78-1.44a1.5 1.5 0 0 0 0-2.34L12.66 7.4c-.31-.25-.7-.39-1.1-.39H7.5C6.67 7 6 7.67 6 8.5Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});