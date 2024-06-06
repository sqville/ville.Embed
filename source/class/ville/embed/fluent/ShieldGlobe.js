/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShieldGlobe",
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

   var pathdregular = "M10.28 2.08a.5.5 0 0 0-.56 0 15.05 15.05 0 0 1-6.3 2.43A.5.5 0 0 0 3 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 0 0 .36 0C14.69 16.23 17 13.39 17 9.5V5a.5.5 0 0 0-.43-.5 15.05 15.05 0 0 1-6.3-2.42ZM4 5.43a15.97 15.97 0 0 0 5.6-2.08l.4-.25.4.25A15.97 15.97 0 0 0 16 5.43V9.5c0 3.4-1.97 5.86-6 7.46-4.03-1.6-6-4.07-6-7.46V5.43Zm8.96 5.07h-.98c-.04.79-.2 1.5-.45 2.08a3 3 0 0 0 1.43-2.08Zm0-1a3 3 0 0 0-1.43-2.08c.24.57.4 1.3.45 2.08h.98Zm-1.98 0a5.13 5.13 0 0 0-.46-1.88 1.72 1.72 0 0 0-.39-.54.43.43 0 0 0-.12-.08.03.03 0 0 0-.02 0h-.01a.43.43 0 0 0-.11.08c-.11.09-.25.26-.39.54-.23.46-.4 1.11-.46 1.88h1.96Zm-1.96 1c.05.77.23 1.42.46 1.88.14.28.28.45.39.54a.42.42 0 0 0 .12.08.03.03 0 0 0 .02 0h.01c.02-.01.06-.03.11-.08.11-.09.25-.26.39-.54.23-.46.4-1.11.46-1.88H9.02Zm-1 0h-.98a3 3 0 0 0 1.43 2.08c-.24-.57-.4-1.3-.45-2.08Zm0-1c.04-.79.2-1.5.45-2.08A3 3 0 0 0 7.04 9.5h.98ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z";
   var pathdfilled = "M10.28 2.08a.5.5 0 0 0-.56 0 15.05 15.05 0 0 1-6.3 2.43A.5.5 0 0 0 3 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 0 0 .36 0C14.69 16.23 17 13.39 17 9.5V5a.5.5 0 0 0-.43-.5 15.05 15.05 0 0 1-6.3-2.42Zm2.68 8.42a3 3 0 0 1-1.43 2.08c.24-.57.4-1.3.45-2.08h.98Zm0-1a3 3 0 0 0-1.43-2.08c.24.57.4 1.3.45 2.08h.98Zm-1.98 0a5.13 5.13 0 0 0-.46-1.88 1.72 1.72 0 0 0-.39-.54.43.43 0 0 0-.12-.08.03.03 0 0 0-.02 0h-.01a.43.43 0 0 0-.11.08c-.11.09-.25.26-.39.54-.23.46-.4 1.11-.46 1.88h1.96Zm-1.96 1c.05.77.23 1.42.46 1.88.14.28.28.45.39.54a.42.42 0 0 0 .12.08.03.03 0 0 0 .02 0h.01c.02-.01.06-.03.11-.08.11-.09.25-.26.39-.54.23-.46.4-1.11.46-1.88H9.02Zm-1 0c.04.79.2 1.5.45 2.08a3 3 0 0 1-1.43-2.08h.98Zm0-1c.04-.79.2-1.5.45-2.08A3 3 0 0 0 7.04 9.5h.98ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z";
   
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