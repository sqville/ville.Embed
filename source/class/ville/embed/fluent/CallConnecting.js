/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CallConnecting",
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

   var pathdregular = "M6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 0 0-3.07-1.12l-.67.25c-.32.13-.62.07-.79-.1A4.32 4.32 0 0 1 7.1 9.19c-.06-.25.06-.55.34-.77l.6-.45a2.5 2.5 0 0 0 .67-3.24l-.97-1.7c-.26-.45-.7-.78-1.2-.9Zm-3.5 2.85c.02-.77.41-1.33 1-1.66a3.1 3.1 0 0 1 2.25-.22c.24.06.45.22.58.43l.97 1.7c.38.65.2 1.49-.4 1.94l-.6.46c-.52.39-.88 1.06-.71 1.78.22.99.7 1.92 1.42 2.62.52.51 1.27.54 1.85.32l.66-.26a1.5 1.5 0 0 1 1.85.67l.95 1.7c.12.22.14.47.06.7a2.91 2.91 0 0 1-1.45 1.66 1.9 1.9 0 0 1-1.9-.16 15.3 15.3 0 0 1-4.64-5.15 12.28 12.28 0 0 1-1.89-6.53Zm9.7-2.9a.5.5 0 1 0-.48.87l.38.21a8.5 8.5 0 0 1 4.33 6.58l.03.32a.5.5 0 1 0 1-.1l-.03-.32a9.5 9.5 0 0 0-4.84-7.35l-.39-.22Zm-1.17 2.67a.5.5 0 0 1 .69-.17l.12.08a6.5 6.5 0 0 1 3.07 4.5l.04.27a.5.5 0 1 1-.98.16l-.05-.27a5.5 5.5 0 0 0-2.6-3.8l-.12-.08a.5.5 0 0 1-.17-.69Z";
   var pathdfilled = "M3.55 2.44a4.1 4.1 0 0 1 2.99-.32c.5.12.94.45 1.2.9l.9 1.57a2.5 2.5 0 0 1-.84 3.36l-.79.5c-.32.2-.44.52-.37.77.27.9.86 1.9 1.52 2.58.19.2.54.25.9.05l.43-.26a2.5 2.5 0 0 1 3.44.94l.8 1.44c.27.47.31 1.03.12 1.53a3.9 3.9 0 0 1-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 0 1-2.03-7.06 2.87 2.87 0 0 1 1.51-2.5Zm9.2-.38a.5.5 0 1 0-.5.88l.4.21a8.5 8.5 0 0 1 4.32 6.58l.03.32a.5.5 0 1 0 1-.1l-.03-.32a9.5 9.5 0 0 0-4.84-7.35l-.39-.22Zm-1.18 2.68a.5.5 0 0 1 .69-.17l.12.07a6.5 6.5 0 0 1 3.07 4.51l.04.27a.5.5 0 1 1-.98.16l-.05-.27a5.5 5.5 0 0 0-2.6-3.8l-.12-.08a.5.5 0 0 1-.17-.69Z";
   
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