/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BotAdd",
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

   var pathdregular = "M12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm3.5-4a.5.5 0 0 0-1 0V3h-3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h4.84a5.47 5.47 0 0 1 3.57-.98c.06-.17.09-.34.09-.52v-4c0-.83-.67-1.5-1.5-1.5h-3v-.5ZM6.5 4h7c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5Zm2 7.5h1.39c-.2.31-.38.65-.52 1H5.31a.8.8 0 0 0-.81.81v.44c0 .69.13 1.46.8 2.07.65.6 1.9 1.12 4.3 1.18.18.35.4.69.66 1h-.51c-2.62-.04-4.2-.6-5.12-1.44A3.52 3.52 0 0 1 3.5 14H3.5v-.69c0-1 .81-1.8 1.8-1.8h3.2v-.01Zm10.5 3a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z";
   var pathdfilled = "M14.5 9c.14 0 .27 0 .4.02.07-.17.1-.34.1-.52v-4c0-.83-.67-1.5-1.5-1.5h-3v-.5c0-.3-.22-.5-.5-.5a.5.5 0 0 0-.5.5V3h-3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h4.84c.9-.63 1.98-1 3.16-1ZM7 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-2 8c0-1.1.33-2.13.89-3H5.3c-1 0-1.81.81-1.81 1.81v.7c.04.77.25 1.75 1.13 2.55.95.87 2.6 1.44 5.37 1.44h.26A5.48 5.48 0 0 1 9 14.5Zm10 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z";
   
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