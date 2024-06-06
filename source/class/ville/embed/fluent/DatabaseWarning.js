/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DatabaseWarning",
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

   var pathdregular = "M4 5c0-1 .88-1.76 1.9-2.22 1.3-.54 2.7-.8 4.1-.78 1.4-.03 2.8.24 4.1.78C15.13 3.24 16 3.99 16 5v3.06a2.05 2.05 0 0 0-1 0V6.7c-.28.2-.58.38-.9.52-1.3.54-2.7.8-4.1.78-1.4.03-2.8-.24-4.1-.78A4.92 4.92 0 0 1 5 6.7V15c0 .37.36.87 1.32 1.31A9.2 9.2 0 0 0 10 17c0 .36.1.7.28 1H10c-1.4.03-2.8-.24-4.1-.78C4.87 16.75 4 16.01 4 15V5Zm1 0c0 .37.36.87 1.32 1.31A9.2 9.2 0 0 0 10 7a9.2 9.2 0 0 0 3.68-.69C14.64 5.87 15 5.37 15 5c0-.37-.36-.88-1.32-1.31A9.2 9.2 0 0 0 10 3a9.2 9.2 0 0 0-3.68.69C5.36 4.12 5 4.63 5 5Zm9.6 4.55-3.5 7A1 1 0 0 0 12 18h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM16 11.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z";
   var pathdfilled = "M16 5c0 1.66-2.69 3-6 3S4 6.66 4 5s2.69-3 6-3 6 1.34 6 3Zm-1.31 3.02.31-.17v.21c-.53.14-1 .48-1.29 1.05l-3.5 7c-.31.64-.25 1.34.06 1.89H10c-3.31 0-6-1.34-6-3V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98Zm-.09 1.53-3.5 7A1 1 0 0 0 12 18h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM16 11.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z";
   
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