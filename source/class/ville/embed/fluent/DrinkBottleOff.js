/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DrinkBottleOff",
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

   var pathdregular = "M6.28 6.99 2.15 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-2.16-2.15a2.5 2.5 0 0 1-3.74 1.97 2.49 2.49 0 0 1-2.5 0A2.5 2.5 0 0 1 5 15.5v-5l.01-.22a4.11 4.11 0 0 1 1.27-3.29ZM13.3 14l-6-6h-.57A3.2 3.2 0 0 0 6 10.34L6 10.5V14h7.3ZM6 15v.5a1.5 1.5 0 0 0 2.44 1.17.5.5 0 0 1 .62 0 1.5 1.5 0 0 0 1.88 0 .5.5 0 0 1 .62 0A1.5 1.5 0 0 0 14 15.5V15H6Zm8-4.5v1.38l1 1V10.5l-.01-.22a4.07 4.07 0 0 0-.67-2.56c-.4-.6-.86-1.04-1.24-1.42l-.01-.01c-.55-.54-.9-.9-1.02-1.4A1.5 1.5 0 0 0 11.5 2h-3a1.5 1.5 0 0 0-.54 2.9c-.06.23-.16.43-.3.64l.71.71c.28-.35.5-.75.59-1.25h2.09c.16.86.74 1.43 1.27 1.96l.05.04H9.12l1 1h3.17a5.2 5.2 0 0 1 .19.27 3.15 3.15 0 0 1 .51 2.07l.01.16ZM8.5 4a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Z";
   var pathdfilled = "m15 15.7 2.15 2.15a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L6.28 7a4.24 4.24 0 0 0-1.27 3.29L5 10.5v5a2.5 2.5 0 0 0 3.75 2.17 2.49 2.49 0 0 0 2.5 0 2.49 2.49 0 0 0 3.74-1.97ZM6 15h8v.5a1.5 1.5 0 0 1-2.44 1.17.5.5 0 0 0-.62 0 1.5 1.5 0 0 1-1.88 0 .5.5 0 0 0-.62 0A1.5 1.5 0 0 1 6 15.5V15Zm9-4.5v2.38L9.12 7h3.25l-.05-.04c-.53-.53-1.1-1.1-1.27-1.96h-2.1c-.08.5-.3.9-.58 1.25l-.71-.71c.14-.2.24-.41.3-.64A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 .55 2.9c.12.48.47.85 1.02 1.39l.01.01c.38.38.84.83 1.24 1.42l.02.05a4.14 4.14 0 0 1 .65 2.51l.01.22ZM8.5 4h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1Z";
   
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