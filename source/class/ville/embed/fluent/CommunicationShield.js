/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CommunicationShield",
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

   var pathdregular = "M10 3a7 7 0 0 0-4.95 11.95.5.5 0 0 1-.7.7A8 8 0 1 1 17.98 9.5c-.42-.18-.8-.47-1.1-.74A7 7 0 0 0 10 3Zm1 8.2c0-.69.45-1.2.99-1.4a2 2 0 1 0-.99 1.93v-.54Zm3.4-2.73c.08-.1.18-.17.28-.23a5 5 0 1 0-8.22 5.3.5.5 0 0 0 .7-.71A3.99 3.99 0 0 1 10 6a4 4 0 0 1 3.86 2.96c.2-.16.39-.33.54-.5ZM9 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6.88-.84c.5.53 1.48 1.38 2.68 1.55a.5.5 0 0 1 .44.48v2.33c0 3.12-2.78 4.25-3.39 4.46a.34.34 0 0 1-.22 0c-.6-.2-3.39-1.34-3.39-4.46v-2.33c0-.24.2-.44.44-.48a4.95 4.95 0 0 0 2.68-1.55c.2-.21.56-.21.76 0Z";
   var pathdfilled = "M3.5 10a6.5 6.5 0 0 1 12.75-1.8c.13.06.25.16.35.27.34.35.82.77 1.38 1.03a8 8 0 1 0-13.64 6.15.75.75 0 0 0 1.06-1.06A6.48 6.48 0 0 1 3.5 10ZM10 5a5 5 0 0 1 4.68 3.24c-.1.06-.2.14-.28.23-.25.26-.59.56-.98.8a3.5 3.5 0 1 0-5.9 3.2.75.75 0 1 1-1.06 1.06A4.99 4.99 0 0 1 10 5Zm0 3a2 2 0 0 1 1.99 1.8c-.54.2-.99.71-.99 1.4v.53A2 2 0 1 1 10 8Zm5.88 1.16c.5.53 1.48 1.38 2.68 1.55a.5.5 0 0 1 .44.48v2.33c0 3.12-2.78 4.25-3.39 4.46a.34.34 0 0 1-.22 0c-.6-.2-3.39-1.34-3.39-4.46v-2.33c0-.24.2-.44.44-.48a4.95 4.95 0 0 0 2.68-1.55c.2-.21.56-.21.76 0Z";
   
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