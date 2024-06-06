/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CheckmarkCircleWarning",
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

   var pathdregular = "M10 2a8 8 0 0 1 7.74 10.01l-.45-.9c-.09-.18-.2-.34-.32-.47a7 7 0 1 0-6.18 6.32L10.27 18H10a8 8 0 1 1 0-16Zm3.36 5.65c.17.17.2.44.06.63l-.06.07-4 4a.5.5 0 0 1-.64.07l-.07-.06-2-2a.5.5 0 0 1 .63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0Zm1.24 3.9a1 1 0 0 1 1.8 0l3.5 7A1 1 0 0 1 19 20h-7a1 1 0 0 1-.9-1.45l3.5-7ZM16 13.5a.5.5 0 1 0-1 0v3a.5.5 0 1 0 1 0v-3Zm-.5 5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z";
   var pathdfilled = "M10 2a8 8 0 0 1 7.74 10.01l-.45-.9a2 2 0 0 0-3.58 0L10.27 18H10a8 8 0 1 1 0-16Zm3.36 5.65a.5.5 0 0 0-.64-.06l-.07.06L9 11.3 7.35 9.65l-.07-.06a.5.5 0 0 0-.7.7l.07.07 2 2 .07.06c.17.11.4.11.56 0l.07-.06 4-4 .07-.08a.5.5 0 0 0-.06-.63Zm1.24 3.9a1 1 0 0 1 1.8 0l3.5 7A1 1 0 0 1 19 20h-7a1 1 0 0 1-.9-1.45l3.5-7ZM16 13.5a.5.5 0 1 0-1 0v3a.5.5 0 1 0 1 0v-3Zm-.5 5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z";
   
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