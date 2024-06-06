/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CallWarning",
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

   var pathdregular = "m12.6 1.55-3.5 7A1 1 0 0 0 10 10h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM14 3.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0ZM13.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM3.55 2.44a4.1 4.1 0 0 1 2.99-.32c.5.12.94.45 1.2.9l.97 1.7a2.5 2.5 0 0 1-.67 3.24l-.6.45c-.28.22-.4.52-.34.78.18.8.59 1.56 1.15 2.12.17.16.47.22.8.1l.66-.26a2.5 2.5 0 0 1 3.07 1.11l.95 1.7c.27.48.31 1.04.12 1.54a3.9 3.9 0 0 1-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 0 1-2.03-7.06 2.87 2.87 0 0 1 1.51-2.5Zm.49.88c-.59.32-.98.88-1 1.65-.04 1.61.33 3.85 1.9 6.53a15.3 15.3 0 0 0 4.62 5.15 1.9 1.9 0 0 0 1.91.16 2.91 2.91 0 0 0 1.45-1.65.84.84 0 0 0-.06-.7l-.95-1.7a1.5 1.5 0 0 0-1.85-.68l-.66.26c-.58.22-1.33.2-1.85-.32a5.32 5.32 0 0 1-1.42-2.61c-.17-.73.2-1.4.71-1.8l.6-.45c.6-.45.78-1.29.4-1.94l-.97-1.7a.93.93 0 0 0-.58-.43 3.1 3.1 0 0 0-2.25.23Z";
   var pathdfilled = "m12.6 1.55-3.5 7A1 1 0 0 0 10 10h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM14 3.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0ZM13.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 0 0-3.07-1.12l-.67.26c-.32.12-.62.06-.79-.1A4.32 4.32 0 0 1 7.1 9.19c-.06-.26.06-.56.34-.78l.6-.45a2.5 2.5 0 0 0 .67-3.24l-.97-1.7c-.26-.45-.7-.78-1.2-.9Z";
   
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