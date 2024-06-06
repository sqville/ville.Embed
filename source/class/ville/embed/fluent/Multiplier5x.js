/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Multiplier5x",
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

   var pathdregular = "M7 6a.5.5 0 0 0-.5.46l-.25 3a.5.5 0 0 0 .56.54l1.88-.23A1.62 1.62 0 1 1 8.9 13h-.36c-.53 0-1.03-.2-1.4-.58l-.28-.27a.5.5 0 0 0-.7.7l.27.28c.56.56 1.32.87 2.1.87h.36a2.62 2.62 0 1 0-.3-5.22l-1.28.15L7.46 7h3.04a.5.5 0 0 0 0-1H7Zm5.15 4.15c.2-.2.5-.2.7 0L14 11.29l1.15-1.14a.5.5 0 0 1 .7.7L14.71 12l1.14 1.15a.5.5 0 0 1-.7.7L14 12.71l-1.15 1.14a.5.5 0 0 1-.7-.7L13.29 12l-1.14-1.15a.5.5 0 0 1 0-.7ZM5 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z";
   var pathdfilled = "M6.25 6.68A.75.75 0 0 1 7 6h3.25a.75.75 0 0 1 0 1.5H7.68l-.1 1.13.44-.06a2.85 2.85 0 1 1 .36 5.68c-.75 0-1.5-.3-2.03-.84l-.38-.38a.75.75 0 1 1 1.06-1.06l.38.38a1.36 1.36 0 0 0 2.34-.95c0-.82-.72-1.45-1.53-1.34l-1.37.18a.75.75 0 0 1-.85-.8l.25-2.76ZM5 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm8.28-3.28a.75.75 0 1 0-1.06 1.06l.72.72-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72.72.72a.75.75 0 1 0 1.06-1.06l-.72-.72.72-.72a.75.75 0 1 0-1.06-1.06l-.72.72-.72-.72Z";
   
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