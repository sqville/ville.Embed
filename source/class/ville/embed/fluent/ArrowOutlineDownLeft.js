/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowOutlineDownLeft",
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

   var pathdregular = "M3 16.44a.5.5 0 0 0 .56.56l9.7-1.08a.5.5 0 0 0 .3-.85l-1.42-1.42a.5.5 0 0 1 0-.71l4.71-4.72a.5.5 0 0 0 0-.7l-4.37-4.37a.5.5 0 0 0-.7 0L7.06 7.86a.5.5 0 0 1-.7 0L4.92 6.44a.5.5 0 0 0-.85.3L3 16.44ZM3.67 18A1.5 1.5 0 0 1 2 16.33l1.08-9.7a1.5 1.5 0 0 1 2.55-.9L6.7 6.8l4.36-4.36a1.5 1.5 0 0 1 2.12 0l4.37 4.37a1.5 1.5 0 0 1 0 2.12l-4.36 4.36 1.06 1.07a1.5 1.5 0 0 1-.9 2.55L3.67 18Z";
   var pathdfilled = "M3.67 17.99A1.5 1.5 0 0 1 2 16.33l1.08-9.7a1.5 1.5 0 0 1 2.55-.9L6.7 6.8l4.36-4.36a1.5 1.5 0 0 1 2.12 0l4.37 4.37a1.5 1.5 0 0 1 0 2.12l-4.36 4.36 1.06 1.07a1.5 1.5 0 0 1-.9 2.55L3.67 18Z";
   
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