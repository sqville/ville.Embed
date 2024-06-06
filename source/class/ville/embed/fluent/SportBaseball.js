/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SportBaseball",
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

   var pathdregular = "M4.61 5.53a6.99 6.99 0 0 1 10.78 0c-.64.38-1.33.7-2.05.94a.5.5 0 0 0 .32.95c.81-.27 1.59-.64 2.31-1.08a6.97 6.97 0 0 1 0 7.33c-.73-.44-1.5-.8-2.31-1.08a.5.5 0 0 0-.32.95c.72.24 1.4.56 2.04.94a6.99 6.99 0 0 1-10.76 0c.64-.38 1.32-.7 2.04-.94a.5.5 0 1 0-.32-.95c-.81.28-1.58.64-2.3 1.08a6.97 6.97 0 0 1-.01-7.33c.72.44 1.5.8 2.31 1.08a.5.5 0 0 0 .32-.95c-.72-.24-1.4-.56-2.05-.94ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM8.57 6.92a10.6 10.6 0 0 0 2.86 0 .5.5 0 0 1 .14.99 11.6 11.6 0 0 1-3.14 0 .5.5 0 0 1 .14-1Zm0 6.18a10.6 10.6 0 0 1 2.86 0 .5.5 0 0 0 .14-1 11.6 11.6 0 0 0-3.14 0 .5.5 0 1 0 .14 1Z";
   var pathdfilled = "M18 10c0 1.55-.44 3-1.2 4.22-.95-.7-2-1.24-3.14-1.63a.5.5 0 1 0-.32.95c1.04.35 2 .86 2.88 1.5a7.98 7.98 0 0 1-12.44 0c.87-.64 1.84-1.15 2.88-1.5a.5.5 0 0 0-.32-.95c-1.13.39-2.2.94-3.14 1.63a7.96 7.96 0 0 1 0-8.43c.94.7 2 1.25 3.14 1.63a.5.5 0 1 0 .32-.95 10.47 10.47 0 0 1-2.88-1.5 7.98 7.98 0 0 1 12.44 0c-.87.64-1.84 1.15-2.88 1.5a.5.5 0 1 0 .32.95c1.14-.38 2.2-.94 3.14-1.63A7.96 7.96 0 0 1 18 10Zm-8 3c.49 0 .96.03 1.43.1a.5.5 0 1 0 .14-1 11.6 11.6 0 0 0-3.14 0 .5.5 0 0 0 .14 1c.47-.07.94-.1 1.43-.1ZM8.57 6.92a.5.5 0 0 0-.14.99 11.6 11.6 0 0 0 3.14 0 .5.5 0 1 0-.14-1 10.6 10.6 0 0 1-2.86 0Z";
   
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