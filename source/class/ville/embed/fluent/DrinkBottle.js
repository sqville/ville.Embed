/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DrinkBottle",
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

   var pathdregular = "M8.5 2h3a1.5 1.5 0 0 1 .55 2.9c.12.48.47.85 1.02 1.39l.01.01c.38.38.84.83 1.24 1.42l.02.05a4.14 4.14 0 0 1 .65 2.51l.01.22v5a2.5 2.5 0 0 1-3.75 2.17 2.49 2.49 0 0 1-2.5 0A2.5 2.5 0 0 1 5 15.5v-5l.01-.22L5 10a4.3 4.3 0 0 1 1.63-3.33l.33-.34c.53-.55.88-.92 1-1.43A1.5 1.5 0 0 1 8.5 2ZM14 14v-3.66a3.09 3.09 0 0 0-.53-2.1 5.2 5.2 0 0 0-.18-.24H6.72A3.2 3.2 0 0 0 6 10.34L6 10.5V14h8Zm-8 1v.5a1.5 1.5 0 0 0 2.44 1.17.5.5 0 0 1 .62 0 1.5 1.5 0 0 0 1.88 0 .5.5 0 0 1 .62 0A1.5 1.5 0 0 0 14 15.5V15H6Zm5.05-10h-2.1c-.15.87-.7 1.45-1.23 1.99L7.7 7h4.67l-.05-.04c-.53-.53-1.1-1.1-1.27-1.96ZM8.5 4h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1Z";
   var pathdfilled = "M7 3.5c0 .64.4 1.18.96 1.4-.12.5-.47.88-1 1.43l-.33.34a4.3 4.3 0 0 0-1.62 3.61L5 10.5v5a2.5 2.5 0 0 0 3.75 2.17 2.49 2.49 0 0 0 2.5 0A2.5 2.5 0 0 0 15 15.5v-5l-.01-.22a4.07 4.07 0 0 0-.67-2.56c-.4-.6-.86-1.04-1.24-1.42l-.01-.01c-.55-.54-.9-.9-1.02-1.4A1.5 1.5 0 0 0 11.5 2h-3C7.67 2 7 2.67 7 3.5Zm-1 12V15h8v.5a1.5 1.5 0 0 1-2.44 1.17.5.5 0 0 0-.62 0 1.5 1.5 0 0 1-1.88 0 .5.5 0 0 0-.62 0A1.5 1.5 0 0 1 6 15.5ZM8.96 5h2.09c.16.86.74 1.43 1.27 1.96l.05.04H7.7l.02-.01C8.24 6.45 8.8 5.87 8.96 5Zm2.54-1h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1Z";
   
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